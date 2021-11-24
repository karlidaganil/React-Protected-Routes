import React from "react";
import { useLocation } from "react-router-dom";

const PublicPage = (props) => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h1>Public Page</h1>
      <h2>Access Allowed to everyone!😄</h2>
    </div>
  );
};

export default PublicPage;
