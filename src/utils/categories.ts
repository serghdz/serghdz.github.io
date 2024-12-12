import type { Post } from '../types/post';
import type { Category } from '../types/category';

export function getCategoryCount(posts: Post[], categoryName: string): number {
  return posts.filter(post => post.category === categoryName).length;
}

export function getAllCategories(posts: Post[]): Category[] {
  const categories = new Map<string, number>();
  
  posts.forEach(post => {
    const count = categories.get(post.category) || 0;
    categories.set(post.category, count + 1);
  });
  
  return Array.from(categories.entries()).map(([name, count]) => ({
    name,
    count
  }));
}