import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
	return (
		<footer className="flex justify-between pt-2 mt-12 mb-4 border-t">
			<p>Created with <FontAwesomeIcon icon={faHeart} size="xs" className="mx-[2px]"/> by Me</p>
			<p>© 2023 Oliver Gao</p>
		</footer>
	);
}