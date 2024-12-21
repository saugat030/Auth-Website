import { createContext, useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
export const AppContent = createContext();
// http://localhost:3000

export const AppContextProvider = (props) => {
  const backendUrl = "http://localhost:3000";

  const [isLoggedin, setIsLoggedin] = useState(false);

  const [userData, setUserData] = useState(false);

  const getAuthState = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/isAuthenticated");
      console.log(data.success);
      if (data.success) {
        setIsLoggedin(true);
        getUserData();
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const getUserData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/user/data");
      //Yo userData afaile backend ma set gareko ho.
      data.success ? setUserData(data.userData) : toast.error(data.message);
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    getAuthState();
  }, []);

  const value = {
    backendUrl,
    isLoggedin,
    setIsLoggedin,
    userData,
    setUserData,
    getUserData,
  };
  return (
    <AppContent.Provider value={value}>{props.children}</AppContent.Provider>
  );
};
