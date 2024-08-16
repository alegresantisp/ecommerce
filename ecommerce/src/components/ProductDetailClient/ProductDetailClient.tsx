'use client';

import IProduct from "@/interfaces/IProducts";
import { useCart } from '@/components/Context/CartContext';
import Swal from 'sweetalert2';
import { useAuth } from "../Context/AuthContext";

interface ProductDetailClientProps {
  product: IProduct;
}

const ProductDetailClient: React.FC<ProductDetailClientProps> = ({ product }) => {
  const {cart, addToCart } = useCart();
  const { user } = useAuth();

  const handleAddToCart = () => {
    if (!user) { 
      Swal.fire({
        title: 'Please Log In!',
        text: 'You need to log in to add items to your cart.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }

    const isProductInCart = cart.some(cartItem => cartItem.id === product.id);

    if (isProductInCart) {
      Swal.fire({
        title: 'Already in Cart!',
        text: `${product.name} is already in your cart.`,
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    } else {
      addToCart(product);
      Swal.fire({
        title: 'Added to Cart!',
        text: `${product.name} has been added to your cart.`,
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className='flex space-x-2'>
      <button onClick={handleAddToCart} className='bg-red-500 hover:bg-red-400 text-white font-bold text-sm py-1 px-3 rounded'>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetailClient;
