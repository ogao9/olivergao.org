const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

export async function queryDB() {
	const response = await notion.databases.query({
		database_id: databaseId,
		sorts: [
			{
				property: "Date",
				direction: "ascending",
			},
		],
	});
	// console.log(response);
    for (let i = 0; i < response.results.length; ++i){
        console.log(response.results[i])
        //let pageId = page.id;
        //let pageres = await notion.pages.retrieve({ page_id: pageId });
        // console.log(pageres);
    }
};
