import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login state from localStorage on component mount
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  return (
    <>
      <Routes>
        <Route
          path="/learnify/register"
          element={!isLoggedIn ? <Register /> : <Navigate to="/learnify/home" />}
        />
        <Route
          path="/learnify/login"
          element={!isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/learnify/home" />}
        />
        <Route
          path="/learnify/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/learnify/register" />}
        />
        <Route path="/learnify" element={<Navigate to="/learnify/register" />} />
      </Routes>
    </>
  );
}

export default App;