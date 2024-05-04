import Home from "./Pages/Home"
import Login from "./Pages/Login"
import { Route, Router, Routes } from "react-router-dom"
import Register from "./Pages/Register"

function App() {

  return (
    <>
    <Routes>
      <Route path="/learnify/" element={<Home />}/>
      <Route path="/learnify/login" element={<Login />} />
      <Route path="/learnify/register" element={<Register />} />
    </Routes>
    </>
  )
}

export default App
