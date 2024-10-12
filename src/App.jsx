import { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Header from "./components/Header"; // Import the Header

function App() {
  const navigate = useNavigate(); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    navigate("/learnify/login");
  };

  return (
    <>
      <Routes>
        <Route
          path="/learnify/home"
          element={<Home isLoggedIn={isLoggedIn} onLogout={handleLogout} />} 
        />
        <Route
          path="/learnify/register"
          element={!isLoggedIn ? <Register /> : <Navigate to="/learnify/home" />}
        />
        <Route
          path="/learnify/login"
          element={!isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/learnify/home" />}
        />
        <Route path="/learnify" element={<Navigate to="/learnify/register" />} />
      </Routes>
    </>
  );
}


export default App;
