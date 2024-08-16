import { categoryNames } from '@/helpers/categoriesList';
import { ICategory } from '@/interfaces/ICategory';

export const categories: ICategory[] = Object.entries(categoryNames).map(([id, name]) => ({
  id: Number(id),
  name,
}));