import Link from "next/link";
import { prettyDate } from "@/lib/utils";

export default function Blog({ posts }) {
	return (
		<section id="blog" className="my-4">
			<h2 className="text-2xl font-bold mb-3">Blog</h2>
			<div>
				{posts.map((obj, idx) => (
					<Link href={`/blog/${obj.slug}`} key={idx}>
						<BlogStrip post={obj} />
					</Link>
				))}
			</div>
		</section>
	);
}

function BlogStrip({ post }) {
	return (
		<div className="rounded-lg py-2 mb-1 hover:bg-gray-100">
			<h3 className="text-lg font-bold">{post.title}</h3>
			<p>
				<span className="opacity-80 inline-block mr-2">{prettyDate(post.publishedAt)}</span>
				{post.excerpt}
			</p>
		</div>
	);
}
