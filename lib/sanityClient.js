import {createClient} from '@sanity/client'

export const client =  createClient({
	projectId: "6e4wp4r2",
	dataset: "production",
	apiVersion: "2022-05-02",
	useCdn: false, // `false` if you want to ensure fresh data
});
