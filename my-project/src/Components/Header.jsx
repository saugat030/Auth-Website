import React from "react";
import { useContext } from "react";
import { AppContent } from "../context/AppContext";
const Header = () => {
  const { userData } = useContext(AppContent);
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="flex flex-col gap-2">
        <h1>Hello , {userData ? userData.name : "Buddy"}</h1>
        <p className="">Welcome to my app</p>
      </div>
    </div>
  );
};

export default Header;
