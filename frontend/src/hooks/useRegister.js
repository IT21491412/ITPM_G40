import { useState } from "react";
import { useNavigate } from "react-router-dom";
import baseURL from '../config/config';



export const useRegister = () => {
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState(null);

  
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const register = async (name, email, password) => {
    setIsLoading(true);
    setError(null);

    // if (password === confirmPassword) {
      try {
        const response = await fetch(baseURL + "/api/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({name, email, password}),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          setIsLoading(false);
          setError(data.error);
          if (data.emptyFields) {
            setEmptyFields(data.emptyFields);
          }
        }

        if (response.ok) {
          // Handle successful registration
          // navigate("/Login");
        } else {
          setError(data.error || "Unknown error occurred");
        }
      } catch (error) {
        console.error(error);
        setError("Error registering. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    // } else {
    //   setError("Passwords do not match");
    //   setIsLoading(false);
    // }
  };

  return { register, isRegLoading:isLoading, regerror:error ,emptyFields};
};
