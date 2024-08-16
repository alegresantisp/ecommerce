export interface UserData {
    email: string;
    password: string;
  }
  
export interface Errors {
    email?: string;
    password?: string;
  }
  
export interface LoginFormProps {
    userData: UserData;
    errors: Errors;
    message?: string | null;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleOnSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  }

