import React from 'react';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import { getProductDB } from '@/helpers/product.helpers';
import IProduct from '@/interfaces/IProducts';

const ProductPage = async () => {

  const products: IProduct[] = await getProductDB();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <ProductGrid products={products} />
    </div>
  );
}

export default ProductPage;