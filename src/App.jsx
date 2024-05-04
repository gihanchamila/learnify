import Home from "./Pages/Home"
import Login from "./Pages/Login"
import { Route, Router, Routes } from "react-router-dom"

function App() {

  return (
    <>
    <Routes>
      <Route path="/learnify/" element={<Home />}/>
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  )
}

export default App
