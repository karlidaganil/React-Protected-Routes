import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>HOME PAGE</h1>
    </div>
  );
};

export default Home;
