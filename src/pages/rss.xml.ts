import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("blog");

  return rss({
    title: "astrid's blog",
    description: "a collection of notes from a girl interested in technology",
    site: "https://astrid.sh",
    items: posts
      .sort((a, b) => b.data.createdAt.getTime() - a.data.createdAt.getTime())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        link: `https://astrid.sh/blog/${post.id}`,
        pubDate: post.data.createdAt,
      })),
  });
}
