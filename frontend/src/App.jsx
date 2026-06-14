import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateRequest from "./pages/CreateRequest";
import Workers from "./pages/Workers";
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
          <Route path="/workers" element={<Workers />} />
          <Route path="/request" element={<CreateRequest />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;