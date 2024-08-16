'use client'
import React from 'react';
import CategoryBar from './CategoryBar';

const HeaderCategory: React.FC = () => {
  return (
    <div className="bg-gray-50 border-b border-gray">
      <div>
        <CategoryBar />
      </div>
    </div>
  );
};

export default HeaderCategory;