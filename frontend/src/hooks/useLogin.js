import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";
import baseURL from '../config/config';


export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();
  

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    if (!email || !password) {
      setError("Please provide both email and password");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(baseURL + "/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save user data in local storage
        localStorage.setItem("user", JSON.stringify(data));
        dispatch({ type: "LOGIN", payload: data });

        // Redirect to home page after successful login
        navigate("/home");
      } else {
        setError("Error logging in. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setError("Error logging in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
