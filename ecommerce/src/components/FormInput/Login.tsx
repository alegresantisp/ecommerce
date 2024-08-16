'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserData, Errors } from '@/interfaces/ILogin';
import { login } from '@/helpers/auth.helper';
import { useAuth } from '../Context/AuthContext';
import LoginForm from './LoginForm';
import Image from 'next/image';
import loginPH from '../../assets/login.jpg';
import { validate } from '../../helpers/validate';
import Swal from 'sweetalert2'; 
import Cookies from 'js-cookie';


const LoginPage: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({ email: '', password: '' });
  const { setUser, setToken } = useAuth();
  const [errors, setErrors] = useState<Errors>({});
  const [message] = useState<string | null>(null);
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((userData) => ({ ...userData, [name]: value }));
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const validationErrors = validate(userData);
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length > 0) {
      Swal.fire({
        title: 'Validation Error!',
        text: 'Please correct the errors in the form.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return; 
    }
  
    try {
     
      const response = await login(userData);
      const { token, user } = response;
  
      setUser(user);
      setToken(token);

      Cookies.set("cookieToken", token, { expires: 30 });
  
      Swal.fire({
        title: 'Success!',
        text: 'Login successful!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        router.push('/');
      });
    } catch (error: any) {
      Swal.fire({
        title: 'Authentication Error!',
        text: 'Either your email or password is incorrect. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block">
          <Image src={loginPH} alt="Login Image" className="object-cover h-full w-full" />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <LoginForm
            userData={userData}
            errors={errors}
            message={message}
            handleInputChange={handleInputChange}
            handleOnSubmit={handleOnSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 


