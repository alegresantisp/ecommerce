import React from 'react';
import HomePageLayout from './layout';
import BannerSlider from '@/components/Slider/BannerSlider';
import HeaderCategory from '@/components/CategoryBar/headerCategory';
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import { categories } from '@/helpers/categoriesConvertion';
import CategoryGrid from '@/components/CategoryGrid/CategoryGrid';
import { getProductDB } from '@/helpers/product.helpers';


const HomePage: React.FC = async () => {
  const products = await getProductDB();

  return (
    <HomePageLayout>
      <>
        <HeaderCategory/>
        <BannerSlider/>
        <ProductGrid products={products} showDescription={false}/> 
        <CategoryGrid categories={categories}/> 
      </>
        
      
    </HomePageLayout>
  );
};

export default HomePage;