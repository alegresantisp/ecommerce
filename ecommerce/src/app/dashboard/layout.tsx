import React from 'react';
import Link from 'next/link';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 p-4 bg-gray-200 truncate sm:text-sm">
        <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 md:items-start">
          <Link
            href="/dashboard/orders"
            className="block text-gray-700 hover:text-black truncate sm:text-sm"
          >
            My Orders
          </Link>
          <Link
            href="/dashboard/user"
            className="block text-gray-700 hover:text-black truncate sm:text-sm"
          >
            My Account 
          </Link>
          <Link
            href="/"
            className="block text-blue-500 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
          >
            Go to Home
          </Link>
        </div>
      </div>
      <div className="w-full md:w-3/4 p-4">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;

