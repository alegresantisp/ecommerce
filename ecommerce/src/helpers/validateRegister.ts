interface RegisterFormData {
    name: string;
    email: string;
    address: string;  
    phone: string;    
    password: string;
  }
  
  export const validateRegister = (formData: RegisterFormData) => {
    const errors: { [key: string]: string } = {};
  
    // Validar nombre requerido
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
  
    // Validar email requerido y formato válido
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
  
    // Validar dirección requerida
    if (!formData.address.trim()) {
      errors.address = "Address is required";
    }
  
    // Validar teléfono requerido y formato 
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Invalid phone number (must be 10 digits)";
    }
  
    // Validar contraseña mínima de 6 caracteres y al menos una mayúscula
    if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    } else if (!/[A-Z]/.test(formData.password)) {
      errors.password = "Password must contain at least one uppercase letter";
    }
  
  
    return errors;
  };
