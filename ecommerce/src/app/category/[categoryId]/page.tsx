import React from 'react';
import ProductCard from '@/components/ProductCard/ProductCard';
import { getProductCategory } from '@/helpers/categories.helpers';
import IProduct from '@/interfaces/IProducts';
import { categoryNames } from '@/helpers/categoriesList';

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const { categoryId } = params;
  const filteredProductsCategory: IProduct[] = await getProductCategory(categoryId); 

  const numericCategoryId = parseInt(categoryId, 10);
  const categoryName = categoryNames[numericCategoryId];

  return (
    <div>
      <h1 className='text-2xl font-bold mb-2'>Products in the Category {categoryName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProductsCategory.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
