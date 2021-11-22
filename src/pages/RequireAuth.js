import {
  Navigate,
  Outlet,
  // Redirect,
} from "react-router-dom";

const RequireAuth = ({ auth }) => {
  if (!auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default RequireAuth;