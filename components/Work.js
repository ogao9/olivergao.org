import Link from "next/link";
import { useState } from "react";
import { urlFor } from "@/lib/utils";

export default function Work({ projects }) {
	return (
		<section id="work" className="my-6">
			<h2 className="text-2xl font-bold mb-4">Work</h2>
			<div className="grid grid-cols-1 min-[400px]:grid-cols-2 auto-rows-[_1fr] justify-items-center gap-8">
				{projects.map((project, idx) => (
					<ProjectCard key={idx} project={project} />
				))}
			</div>
		</section>
	);
}

function ProjectCard({ project }) {
	const mainAltText = project.altText ? project.altText : `Project cover`;
	const [hover, setHover] = useState(false);

	return (
		<Link
			href={`/projects/${project.slug}`}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<article className="grid grid-rows-[max-content_1fr]">
				<section className="mb-3">
					<img
						src={urlFor(project.image).url()}
						alt={mainAltText}
						className={`object-cover aspect-video ${
							hover ? "opacity-90" : ""
						}`}
					/>
				</section>

				<section className="">
					<h2
						className={`text-xl font-bold mb-1 ${
							hover ? "underline" : ""
						}`}
					>
						{project.title}
					</h2>
					<p className="leading-snug">{project.description}</p>
				</section>
			</article>
		</Link>
	);
}
