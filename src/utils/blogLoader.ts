import matter from 'gray-matter';

export interface ArticleMetadata {
  title: string;
  description: string;
  slug: string;
  icon: string;
  date: string;
  author: string;
}

export interface Article extends ArticleMetadata {
  content: string;
}

// Import all markdown files
const articleModules = import.meta.glob('/src/content/articles/*.md', { 
  as: 'raw',
  eager: true 
});

export const getAllArticles = (): Article[] => {
  const articles: Article[] = [];

  Object.entries(articleModules).forEach(([path, content]) => {
    const { data, content: markdownContent } = matter(content as string);
    
    articles.push({
      title: data.title,
      description: data.description,
      slug: data.slug,
      icon: data.icon,
      date: data.date,
      author: data.author,
      content: markdownContent,
    });
  });

  // Sort by date, newest first
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  const articles = getAllArticles();
  return articles.find(article => article.slug === slug);
};

export const getArticleMetadata = (): ArticleMetadata[] => {
  return getAllArticles().map(({ content, ...metadata }) => metadata);
};
