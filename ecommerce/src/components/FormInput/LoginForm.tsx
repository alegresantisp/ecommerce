import React from 'react';
import {LoginFormProps} from '../../interfaces/ILogin';


const LoginForm: React.FC<LoginFormProps> = ({ userData, errors, message, handleInputChange, handleOnSubmit }) => {
  return (
    <form className="form-container" onSubmit={handleOnSubmit}>
      <div className="mb-4">
        <input
          type="email"
          value={userData.email}
          name="email"
          placeholder="Email"
          className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2"
          onChange={handleInputChange}
        />
        {errors.email  && <p className="text-red-500">{errors.email }</p>}
      </div>
      <div className="mb-6">
        <input
          type="password"
          value={userData.password}
          name="password"
          placeholder="Password"
          className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2"
          onChange={handleInputChange}
        />
        {errors.password && <span className="text-red-500">{errors.password}</span>}
      </div>
      <button type="submit" className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded">Login</button>
      {message && <p className="text-green-500 mt-4">{message}</p>}
    </form>
  );
};

export default LoginForm;

