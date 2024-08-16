export const validate = (values: { email: string; password: string }) => {
    let errors: { email?: string; password?: string } = {};
  
    if (!values.email) {
      errors.email = 'Username is required';
    }
  
    if (!values.password) {
      errors.password = 'Password is required';
    }
  
    return errors;
  };