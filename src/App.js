import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import PrivatePage from "./pages/PrivatePage";
import PublicPage from "./pages/PublicPage";
import RequireAuth from "./pages/RequireAuth";
import Header from "./pages/Header";
import Login from "./pages/Login";

function App() {
  const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/public-page" element={<PublicPage />} />
          <Route path="/login-page" element={<Login />} />
          <Route element={<RequireAuth auth={isLoggedIn} />}>
            <Route path="/private-page" element={<PrivatePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
