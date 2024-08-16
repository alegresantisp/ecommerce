import React from 'react';
import SideBar from '@/components/SideBar/SideBar';
import {categories} from '@/helpers/categoriesConvertion'

interface CategoryLayoutProps {
  children: React.ReactNode;
}

const CategoryLayout: React.FC<CategoryLayoutProps> = ({ children }) => {
    return (
      <div className="flex">
        <div className="w-1/4">
        <SideBar type="categories" categories={categories} />
        </div>
        <div className="w-3/4 p-4">
          {children}
        </div>
      </div>
    );
  };
  
  export default CategoryLayout;