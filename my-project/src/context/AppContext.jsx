import { createContext, useState } from "react";

export const AppContent = createContext();
// http://localhost:3000
export const AppContextProvider = (props) => {
  const backendUrl = "http://localhost:3000";
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState(false);

  const value = {
    backendUrl,
    isLoggedin,
    setIsLoggedin,
    userData,
    setUserData,
  };
  return (
    <AppContent.Provider value={value}>{props.children}</AppContent.Provider>
  );
};
