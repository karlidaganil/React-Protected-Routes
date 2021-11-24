import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PrivatePage = () => {
  const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn);
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h1>Private Page</h1>
      <h2>Access Allowed only to LoggedIn Users!🤟🔥</h2>
    </div>
  );
};

export default PrivatePage;
