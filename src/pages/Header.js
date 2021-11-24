import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../authSlice";

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn);
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/" state={{ from: location.pathname }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/public-page" state={{ from: location.pathname }}>
            Public Page
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink to="/private-page" state={{ from: location.pathname }}>
              Private Page
            </NavLink>
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <NavLink to="/login-page" state={{ from: location.pathname }}>
              Login
            </NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button
              onClick={() => {
                dispatch(setLoggedIn(false));
              }}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
