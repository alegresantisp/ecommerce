export interface RegisterData {
  
    name: string;
    email: string;
    address: string;  
    phone: string;    
    password: string;
}

export interface AuthToken {
  token: string;
}

export interface RegisterErrors {
  name?: string;
  email?: string;
  address?: string;   
  phone?: string;     
  password?: string;
}

export interface RegisterFormProps {
  formData: RegisterData;
  errors: RegisterErrors;
  message: string | null;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export interface AuthContextProps {
  user: RegisterData | null;
  token: string | null;
  setUser: (user: RegisterData | null) => void;
  setToken: (token: string | null) => void;
 
}