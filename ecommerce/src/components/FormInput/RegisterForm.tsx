import React, { useState } from 'react';
import { RegisterFormProps } from '../../interfaces/IRegister';


const RegisterForm: React.FC<RegisterFormProps> = ({
  formData,
  errors,
  message,
  handleInputChange,
  handleOnSubmit,
}) => {

  return (
    <form onSubmit={handleOnSubmit} className="space-y-4">
      <div className="mb-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2"
          onChange={handleInputChange}
         
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2"
          onChange={handleInputChange}
          
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="address"
          value={formData.address}
          placeholder="Address"
          className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2"
          onChange={handleInputChange}
         
        />
        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="phone"
          value={formData.phone}
          placeholder="Phone"
          className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2"
          onChange={handleInputChange}
       
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>
      <div className="mb-6">
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2"
          onChange={handleInputChange}
         
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>
      <button
        type="submit"
        className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded"
      >
        Register
      </button>
      {message && <p className="text-green-500 mt-4 text-center">{message}</p>}
    </form>
  );
};

export default RegisterForm;

