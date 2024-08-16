import React, { ReactNode } from 'react';

interface HomePageLayoutProps {
    children: ReactNode;
  }

  const HomePageLayout: React.FC<HomePageLayoutProps> = ({ children }) => {
    return (
        <div>
            <main>{children}</main>
        </div>
    )
}

export default HomePageLayout;