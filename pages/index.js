import Head from "next/head";
import About from "@/components/About";
import Updates from "@/components/Updates";
import Work from "@/components/Work";
import Blog from "@/components/Blog";
import { client } from "@/lib/sanityClient";
import groq from "groq";

export default function Home({ about, updates, projects, posts }) {
	return (
		<>
			<Head>
				<title>Oliver Gao</title>
				<meta property="og:title" content="Oliver Gao" key="title" />
			</Head>
			<About about={about} />
			<Updates updates={updates} />
			<Work projects={projects} />
			<Blog posts={posts} />
		</>
	);
}

export async function getStaticProps() {
	const aboutQuery = groq`*[_type == "about"][0]{
		p1, p2, p3
	}`;

	const updateQuery = groq`*[_type == "update" && feature]{
		date,
		showFullDate,
		body
	}|order(date desc)`;

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
		mainImage,
		altText,
		publishedAt,
	}|order(publishedAt desc)`;

	const about = await client.fetch(aboutQuery);
	const updates = await client.fetch(updateQuery);
	const projects = await client.fetch(projectQuery);
	const posts = await client.fetch(postQuery);

	return {
		props: {
			about,
			updates,
			projects,
			posts,
		},
	};
}
