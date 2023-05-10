import Image from "next/image";
import Link from "next/link";
import BlockContent from "@sanity/block-content-to-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function About({ about }) {
	return (
		<section id="about" className="my-6">
			<BlockContent blocks={about.p1}/>
			<div className="flex mb-6 items-center">
				<Image
					src="/oliver.jpg"
					alt="A photo of me with blue sky and trees in the background"
					className="rounded-full mr-6"
					width={150}
					height={150}
					priority
				/>
				<ul className="space-y-1">
					<li>
						<a
							href="https://www.linkedin.com/in/oliver-gao/"
							target="_blank"
							rel="noreferrer"
							className="about-link"
						>
							<FontAwesomeIcon
								icon={faLinkedinIn}
								className="mr-1 aspect-square"
							/>
							LinkedIn
						</a>
					</li>
					<li>
						<Link
							href="/resume.pdf"
							target="blank"
							className="about-link"
						>
							<FontAwesomeIcon
								icon={faFilePdf}
								className="mr-1 aspect-square"
							/>
							Resume
						</Link>
					</li>
					<li>
						<a
							href="https://github.com/ogao9"
							target="_blank"
							rel="noreferrer"
							className="about-link"
						>
							<FontAwesomeIcon
								icon={faGithub}
								className="mr-1 aspect-square"
							/>
							Github
						</a>
					</li>
					<li>
						<a
							href="mailto:ogao@umich.edu"
							target="_blank"
							rel="noreferrer"
							className="about-link"
						>
							<FontAwesomeIcon
								icon={faSquareEnvelope}
								className="mr-1 aspect-square"
							/>
							Email
						</a>
					</li>
				</ul>
			</div>
			<BlockContent blocks={about.p2}/>
			<BlockContent blocks={about.p3}/>
		</section>
	);
}
