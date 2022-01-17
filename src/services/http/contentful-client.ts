import { createClient } from "contentful";

export async function getArticles() {
    const client = createClient({
        space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
        accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_KEY,
    });

    const res = await client.getEntries({ content_type: "article" });

    return {
        articles: res.items,
    };
}
