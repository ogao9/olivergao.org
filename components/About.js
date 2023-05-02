import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function About() {
	return (
		<section className="my-6">
			<p className="mb-6">
				Hi! I&#39;m Oliver. I&#39;m a third-year student at the{" "}
				<b>University of Michigan</b> studying computer science. I&#39;m
				interested in building beautiful technology that people love and
				find incredibly useful.
			</p>
			<div className="flex mb-6 items-center">
				<Image
					src="/oliver.jpg"
					alt="A photo of me with blue sky in the background"
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
			<p className="mb-6">
				Currently, I&#39;m a full stack developer building{" "}
				<a href="https://pit-kn.io" className="about-link">
					<b>Braid</b>
				</a>
				, a platform to connect BIPOC entrepreneurs in the field of
				Public Interest Technology. This past summer, I worked on Snagit
				as a software engineer intern at TechSmith.
			</p>
			<p>
				Besides tech related things, I enjoy running, eating, cooking,
				watching YouTube videos, and playing the violin in the Michigan
				Pops Orchestra.
			</p>
		</section>
	);
}
