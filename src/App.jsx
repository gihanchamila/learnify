import Home from "./Pages/Home"
import Login from "./Pages/Login"
import { Route, Router, Routes } from "react-router-dom"
import Register from "./Pages/Register"
import { Navigate } from "react-router-dom"

function App() {

  return (
    <>
    <Routes>
      <Route path="/learnify/register" element={<Register />} />
      <Route path="/learnify/" element={<Home />}/>
      <Route path="/learnify/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/learnify/register" replace />} />
    </Routes>
    </>
  )
}

export default App
