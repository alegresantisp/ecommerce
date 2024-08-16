import IProduct from '../interfaces/IProducts';
import { getProductDB } from './product.helpers';

export async function getProductCategory(categoryId: string): Promise<IProduct[]> {
  try {
    const products: IProduct[] = await getProductDB();
    const productCategory = products.filter((product) => product.categoryId.toString() === categoryId);
    return productCategory;
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }
}
