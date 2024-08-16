import { UserData } from "@/interfaces/ILogin";
import { RegisterData } from "@/interfaces/IRegister";

const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function register(userData:RegisterData) {
    try {
  
          const response = await fetch(`${APIURL}/users/register`, {
          method: 'POST',
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(userData)
      })
        
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to register');
      }
  
      
    } catch (error: any) {
      throw new Error(error);
    }
  }

  export async function login(userData:UserData) {
    try {
  
          const response = await fetch(`${APIURL}/users/login`, {
          method: 'POST',
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(userData)
      })
        
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }
  
    return response.json(); 
    } catch (error: any) {
      throw new Error(error);
    }
  } 