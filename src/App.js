import "./App.css";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Card from "./pages/Card";
import RequireAuth from "./pages/RequireAuth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/accounts">Account Page (protected) </Link>
          </li>
          <li>
            <Link to="/cards">Cards Page (unprotected) </Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<RequireAuth auth={false} />}>
            <Route path="/accounts" element={<Account />} />
            <Route path="/cards" element={<Card />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
