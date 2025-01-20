export interface BlogPost {
    _id: string;
    _type: "blogPost";
    title: string;
    slug: {
      current: string;
    };
    author: {
      name: string;
      image?: ImageAsset;
    };
    publishedAt: string;
    mainImage?: ImageAsset & { alt?: string };
    excerpt?: string;
    content: PortableTextBlock[]; // Sanity Portable Text
    categories: Category[];
    tags?: string[];
    seo?: Seo;
  }
  
  export interface ImageAsset {
    _type: "image";
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  }
  
  export interface Category {
    _id: string;
    _type: "category";
    title: string;
    description?: string;
  }
  
  export interface Seo {
    metaTitle: string;
    metaDescription?: string;
    keywords?: string[];
  }
  
  export interface PortableTextBlock {
    _type: string;
    [key: string]: unknown;
  }
  