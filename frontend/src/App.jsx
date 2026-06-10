import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div dir="rtl">
        <nav className="navbar navbar-expand-lg bg-white shadow-sm">
          <div className="container">
            <Link className="navbar-brand fw-bold" to="/">
              🔧 FixNow
            </Link>

            <div>
              <Link className="btn btn-outline-primary ms-2" to="/login">
                התחבר
              </Link>

              <Link className="btn btn-primary" to="/register">
                הירשם
              </Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;