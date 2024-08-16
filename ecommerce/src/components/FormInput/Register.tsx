'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import registerPH from '../../assets/register.jpg';
import RegisterForm from './RegisterForm';
import { validateRegister } from '../../helpers/validateRegister';
import { RegisterData, RegisterErrors } from '../../interfaces/IRegister';
import { register } from '../../helpers/auth.helper';
import Swal from 'sweetalert2';


const RegisterPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterData>({
    name: '',
    email: '',
    address: '', 
    phone: '',      
    password: '',
  });
  
  const [errors, setErrors] = useState<RegisterErrors>({});
  const [message, setMessage] = useState<string | null>(null);

  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((formData) => ({ ...formData, [name]: value }));

  };


  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    
    const validationErrors = validateRegister(formData);
    
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await register(formData);
        setMessage('Registro exitoso!');
        Swal.fire({
          title: 'Success!',
          text: 'Register successful!',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          router.push('/login');
        });
        
      } catch (error: any) {
        setMessage(error.message || 'Ocurrió un error al registrar.');
      }
    } else {
      setMessage(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl grid grid-cols-1 md:grid-cols-2">
        
        <div className="hidden md:block">
          <Image src={registerPH} alt="Register Image" className="object-cover h-full w-full" />
        </div>
        
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          <RegisterForm
            formData={formData}
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

export default RegisterPage;