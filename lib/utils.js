import { client } from "./sanityClient";
import imageUrlBuilder from "@sanity/image-url";

export function urlFor(source) {
	return imageUrlBuilder(client).image(source);
}

export function prettyDate(dateString, simple = false) {
	const date = new Date(dateString);
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	if (simple) return monthNames[date.getMonth()] + " " + date.getFullYear()
	else return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
