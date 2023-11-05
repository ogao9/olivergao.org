import BlockContent from "@sanity/block-content-to-react";
import { prettyDate } from "@/lib/utils";

export default function Updates({ updates }) {
	return (
		<section id="updates" className="my-6">
			<h2 className="text-2xl font-bold mb-4">Updates</h2>
			<ul className="list-disc space-y-[4px] ml-8">
				{updates.map((update, idx) => (
					<li key={idx}>
						{prettyDate(update.date, !update.showFullDate)} -{" "}
						<BlockContent blocks={update.body} />
					</li>
				))}
			</ul>
		</section>
	);
}
