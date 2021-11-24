import { useDispatch } from "react-redux";
import { setLoggedIn } from "../authSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Login = ({ from }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(location);
  return (
    <button
      onClick={() => {
        dispatch(setLoggedIn(true));
        navigate(location.state.from);
      }}
    >
      Login
    </button>
  );
};

export default Login;
