import type { Category } from '../types/category';
import { recentPosts } from './posts';
import { getAllCategories } from '../utils/categories';

export const categories: Category[] = getAllCategories(recentPosts);