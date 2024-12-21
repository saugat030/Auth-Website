import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <NavBar />
      <Header></Header>
    </div>
  );
};

export default Homepage;
