import { groq } from "next-sanity";
import sanityClient from "./sanity";

export async function getBlogPosts() {
  return sanityClient.fetch(
    groq`*[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      excerpt,
      publishedAt,
      "author": author->name,
      "categories": categories[]->title,
      content
    }`
  );
}

export async function getBlogBySlug(slug: string) {
  return sanityClient.fetch(
    groq`*[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      excerpt,
      publishedAt,
      "author": author->name,
      "categories": categories[]->title,
      content
    }`,
    { slug }
  );
}
