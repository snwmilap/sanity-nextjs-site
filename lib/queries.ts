// src/lib/queries.ts
export const allBlogPostsQuery = `
*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  "author": author->name,
  "categories": categories[]->title
}`;

export const blogPostQuery = `
*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  content,
  publishedAt,
  "author": author->name,
  "categories": categories[]->title
}`;
