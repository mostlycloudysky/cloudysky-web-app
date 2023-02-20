export interface Post {
    _id: string;
    _createdAt: string;
    title: string;
    author: {
      name: string;
      image: string;
    };
    categories: Category[];
    // comments: Comment[];
    description: string;
    mainImage: {
      asset: {
        url: string;
      };
    };
    slug: {
      current: string;
    };
    body: [object];
}

export interface Snippets {
    _id: string;
    _createdAt: string;
    title: string;
    // comments: Comment[];
    description: string;
    mainImage: {
      asset: {
        url: string;
      };
    };
    slug: {
      current: string;
    };
    body: [object];
}

export interface DetailedPost {
    _id: string;
    _createdAt: string;
    title: string;
    author: {
      name: string;
      image: string;
    };
    categories: Category[],
    // comments: Comment[];
    description: string;
    mainImage: {
      asset: {
        url: string;
      };
    };
    slug: {
      current: string;
    };
    body: [object];
}

export interface Category {
    title: string;
    slug: string;
}

