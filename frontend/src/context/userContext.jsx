import React, { createContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
// 5. You must import API_PATHS from wherever it is defined
// import { API_PATHS } from "../constants/apiPaths"; // <-- Example import

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 4. Standardized to lowercase "token"
    const accessToken = localStorage.getItem("token"); 
    if (!accessToken) {
      setLoading(false);
      return;
    }
    const fetchUser = async () => {
      try {
        // Make sure API_PATHS is imported
        const response = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE);
        // 3. Completed the setUser call
        setUser(response.data); 
      } catch (error) {
        console.error("user not authenticated", error);
        clearUser(); // This will clear the bad token
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
    
  // 2. Added empty dependency array to run only on mount
  }, []); 

  // 1. All functions are now INSIDE the UserProvider component
  const updateUser = (userData) => {
    setUser(userData);
    // 4. Standardized to lowercase "token"
    localStorage.setItem("token", userData.token);
    setLoading(false);
  };

  const clearUser = () => {
    setUser(null);
    // 4. Standardized to lowercase "token"
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ user, loading, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
// 1. This is the correct closing brace for the UserProvider component
}; 

export default UserProvider;