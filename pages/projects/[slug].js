import Head from "next/head";
import groq from "groq";
import BlockContent from "@sanity/block-content-to-react";
import { client } from "@/lib/sanityClient";
import { urlFor } from "../../lib/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function SingleProjectDetails({ project }) {
	const mainAltText = project.altText
		? project.altText
		: `Project details cover`;

	return (
		<>
			<Head>
				<title>{`${project.title} | Oliver Gao`}</title>
			</Head>
			<article className="mt-10">
				<section>
					<div className="mb-4">
						<h1 className="text-3xl font-bold mb-4">
							{project.title}
						</h1>

						{project.externalLink && (
							<a
								href={project.externalLink}
								target="_blank"
								rel="noreferrer"
								className="project-link block mb-2"
							>
								<FontAwesomeIcon
									icon={faArrowUpRightFromSquare}
									className="mr-1 "
								/>
								Live Example
							</a>
						)}

						{project.githubLink && (
							<a
								href={project.githubLink}
								target="_blank"
								rel="noreferrer"
								className="project-link block mb-1"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="mr-1"
								/>
								Github Repository
							</a>
						)}
					</div>
					<img
						src={urlFor(project.image).url()}
						alt={mainAltText}
						className="w-full object-cover aspect-video border"
					/>
				</section>

				<section className="prose prose-stone max-w-full">
					<BlockContent
						blocks={project.body}
						imageOptions={{ fit: "max" }}
					/>
				</section>
			</article>
		</>
	);
}

export async function getStaticPaths() {
	const allPosts = await client.fetch('*[_type == "Project"]');
	const paths = await allPosts.map((project) => ({
		params: { slug: project.slug.current },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const { slug = "" } = context.params;
	const query = groq`*[_type == "Project" && slug.current == $slug][0]{
        ..., 
        "slug" : slug.current, 
        body[]{
            ..., 
            asset->{
            ...,
            "_key": _id
            }
        },
    }`;
	const project = await client.fetch(query, { slug });

	return {
		props: {
			project,
		},
	};
}
