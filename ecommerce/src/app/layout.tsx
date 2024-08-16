import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav/NavBar";
import Footer from "@/components/footer/Footer";
import { AuthProvider } from "@/components/Context/AuthContext";
import { CartProvider } from "@/components/Context/CartContext";
import { WishlistProvider } from "@/components/Context/WishListContext";

const poppins = Poppins({ subsets: ["latin"], weight:["400", "700"] });

export const metadata: Metadata = {
  title: "Sas Ecommerce",
  description: "Ecommerce by Sas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body className={poppins.className}>
      
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <div className="flex flex-col min-h-screen">
                <NavBar />
                <main className="flex-grow">{children}</main>
                <Footer />
              </div>
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
               
      </body>
    </html>
    
    
  );
}
