import Head from "next/head";
import About from "@/components/About";
import Updates from "@/components/Updates";
import Work from "@/components/Work";
import Blog from "@/components/Blog";
import { client } from "@/lib/sanityClient";
import groq from "groq";

export default function Home({ projects, posts }) {
	return (
		<>
			<Head>
				<title>Oliver Gao</title>
				<meta property="og:title" content="Oliver Gao" key="title" />
			</Head>
			<About />
			<Updates />
			<Work projects={projects} />
			<Blog posts={posts} />
		</>
	);
}

export async function getStaticProps() {
	const projectQuery = groq`*[_type == "Project"]{
		title,
		description,
		"slug" : slug.current,
		image,
		altText,
		date
	}|order(date desc)`;

	const postQuery = groq`*[_type == "post"]{
		title,
		excerpt,
		"slug" : slug.current,
		"category" : category->title,
		mainImage,
		altText,
		publishedAt,
		body[]{
                ..., 
                asset->{
                ...,
                "_key": _id
                }
        }
	}|order(publishedAt desc)`;

	const projects = await client.fetch(projectQuery);
	const posts = await client.fetch(postQuery);

	return {
		props: {
			projects,
			posts,
		},
	};
}
