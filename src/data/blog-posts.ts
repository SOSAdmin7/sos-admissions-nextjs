import posts from "./blog-catalog.json";
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  modified: string;
  revised?: string;
  image: string;
  category: string;
};
export const blogPosts: BlogPost[] = posts;
