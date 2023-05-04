import BlockContent from "@sanity/block-content-to-react";
import groq from "groq";
import { client } from "@/lib/sanityClient";
import { urlFor, prettyDate } from "../../lib/utils";
import Head from "next/head";

export default function Post({ post }) {
	const mainAltText = post.altText ? post.altText : `Blog post cover`;

	return (
		<>
			<Head>
				<title>{`${post.title} | Oliver Gao`}</title>
			</Head>
			<article className="mt-10">
				<section className="mb-4">
					<h1 className="text-3xl font-bold mb-1">{post.title}</h1>
					<p className="mb-4">
						<span className="opacity-90 inline-block mr-2">
							{prettyDate(post.publishedAt)}
						</span>{" "}
						{post.excerpt}
					</p>

					<img
						src={urlFor(post.mainImage).url()}
						alt={mainAltText}
						className="w-full object-cover aspect-video"
					/>
				</section>

				<section className="prose prose-slate max-w-full">
					<BlockContent
						blocks={post.body}
						imageOptions={{ fit: "max" }}
					/>
				</section>
			</article>
		</>
	);
}

export async function getStaticPaths() {
	const allPosts = await client.fetch('*[_type == "post"]');
	const paths = await allPosts.map((post) => ({
		params: { slug: post.slug.current },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const { slug = "" } = context.params; // It's important to default the slug so that it doesn't return "undefined"

	const query = groq`*[_type == "post" && slug.current == $slug][0]{
            title,
            "slug": slug.current,
            "category": category->title,
            excerpt,
            mainImage,
			altText,
            publishedAt,
            "authorName": author->name,
            "authorImage": author->image,
            body[]{
                ..., 
                asset->{
                ...,
                "_key": _id
                }
            }
        }`;
	const post = await client.fetch(query, { slug }); // slug takes the place of $slug in the query: this is like printf in C++

	return {
		props: {
			post,
		},
	};
}
