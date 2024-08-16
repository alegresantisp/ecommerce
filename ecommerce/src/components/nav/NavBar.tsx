 'use client'

import React, { useState } from 'react';
import Container from '../../interfaces/Container';
import Link from 'next/link';
import { FaUser, FaTimes } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import Image from 'next/image';
import flashImage from '../../assets/flash_li.png';
import CartIcon from '@/components/CartIcon/CartIcon';
import WishlistIcon from '../WhishListIcon/WhishListIcon';
import { useAuth } from '../Context/AuthContext';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import SearchBar from '@/components/SearchBar/SearchBar'
import Cookies from 'js-cookie';


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, setUser, setToken } = useAuth();
  const router = useRouter();


  const handleOptionClick = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    Swal.fire({
      title: `Bye, ${user?.name || 'there'}!`,
      text: 'Thank you for stopping by. We hope to see you again soon!',
      icon: 'info',
      confirmButtonText: 'OK'
    }).then(() => {
   
      localStorage.removeItem('userSession');
      localStorage.removeItem('userToken');
      
       
      setUser(null);
      setToken(null);
      Cookies.remove("cookieToken");
      router.push('/');
    });
  };

  return (
    <div className='sticky top-0 w-full z-30 h-20 bg-white border-b-[1px]'>
      <div className='py-2 mt-5'>
        <Container>
          <div className='flex items-center justify-between gap-3 md:gap-0'>
            <div className="flex items-center gap-2">
              <Image src={flashImage} alt="Flash Image" width={32} height={32} />
              <Link href="/" className="text-lg font-bold">Sas Ecommerce</Link>
            </div>
            
            <div className='hidden md:flex items-center gap-20'>
              <Link href="/about" className="text-gray-600 hover:text-black">About Us</Link>
              <SearchBar /> 
              
            </div>
  
            <div className='hidden md:flex items-center gap-4 md:gap-8'>
              {user ? (
                <>
                  <Link href="/wishlist" className="text-gray-600 hover:text-black">
                    <span className="inline-flex items-center justify-center w-8 h-8">
                      <WishlistIcon />
                    </span>
                  </Link>
                  <Link href="/cart" className="text-gray-600 hover:text-black">
                    <span className="inline-flex items-center justify-center w-8 h-8">
                      <CartIcon />
                    </span>
                  </Link>
                  <div className="relative">
                    <button 
                      className="flex items-center text-gray-600 hover:text-black"
                      onClick={() => setMenuOpen(!menuOpen)}
                    >
                      <FaUser size={22} />
                      <span className="ml-2">{`Hola, ${user.name}`}</span>
                    </button>
                  </div>
                  <div>
                  
            </div>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-gray-600 hover:text-black">
                    <button className="flex items-center text-gray-600 hover:text-black">
                      <FaUser size={20} />
                      <span className="ml-2">Log In</span>
                    </button>
                  </Link>
                  <Link href="/register" className="text-gray-600 hover:text-black">
                    <button className="flex items-center text-gray-600 hover:text-black">
                      <span className="ml-2">Register</span>
                    </button>
                  </Link>
                </>
              )}
            </div>
            
            <div className='md:hidden flex items-center'>
              <button 
                className="flex items-center text-gray-600 hover:text-black" 
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <FaTimes size={20} /> : <FaUser size={20} />}
              </button>
            </div>
          </div>
        </Container>
  
        {menuOpen && (
          <div className="absolute right-0 w-1/2 md:w-1/3 bg-white z-40 p-4 md:p-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{user ? `Hola, ${user.name}` : 'Menu'}</h2>
              <button onClick={() => setMenuOpen(false)}>
                <FaTimes size={20} />
              </button>
            </div>
            {user ? (
              <div>
                <Link href="/wishlist" className="block py-2 text-gray-700 hover:bg-gray-100">
                  Wishlist
                </Link>
                <Link href="/cart" className="block py-2 text-gray-700 hover:bg-gray-100">
                  Cart
                </Link>
                <Link href="/dashboard" onClick={handleOptionClick} className="block py-2 text-gray-700 hover:bg-gray-100">
                  Dashboard
                </Link>
                <button 
                  onClick={handleLogout}
                  className="flex items-center py-2 text-gray-700 hover:bg-red-100 hover:text-red-500 w-full text-left transition-colors"
                >
                  <FiLogOut /> <span className='ml-2'>Log out</span>
                </button>
                
              </div>
            ) : (
              <div>
                <Link href="/login" className="block py-2 text-gray-700 hover:bg-gray-100">Log In</Link>
                <Link href="/register" className="block py-2 text-gray-700 hover:bg-gray-100">Register</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar; 








