import sanityClient from "@sanity/client";

export default sanityClient({
	projectId: "6e4wp4r2",
	dataset: "production",
	apiVersion: "2022-05-02",
	useCdn: true, // `false` if you want to ensure fresh data
});
