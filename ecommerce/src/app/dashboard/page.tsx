import React from 'react';
import Link from 'next/link';

const DashboardPage: React.FC = () => {
  return (
    
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center mt-16 mb-16">
          <Link href="/dashboard/orders" className="block py-12 px-6 text-center bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition text-2xl">
            My Orders
          </Link>
          <Link href="/dashboard/user" className="block py-12 px-6 text-center bg-red-500 text-white rounded-lg hover:bg-red-400 transition text-2xl">
            My Account 
          </Link>
        </div>
      </div>
    
  );
}

export default DashboardPage;