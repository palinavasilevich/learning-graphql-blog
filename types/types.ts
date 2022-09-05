export interface IAuthor {
  name: string;
  photo: {
    url: string;
  };
  bio: string;
  posts: IPost[];
}

export interface ICategory {
  name: string;
  posts: IPost[];
}

export interface IPost {
  title: string;
  excerpt: string;
  content: string;
  featuredImage: {
    url: string;
  };
  author: IAuthor;
  featuredPost: boolean;
  categories: ICategory[];
  slug: string;
  createdAt: string;
}