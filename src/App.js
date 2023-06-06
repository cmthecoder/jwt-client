import { Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Secret from "./pages/Secret"

const App = () => {
  return (
    <Routes>
      <Route exact path ='/register' element={<Register/> }/>
      <Route exact path ='/login' element={<Login/> }/>
      <Route exact path ='/' element={<Secret/> }/>
    </Routes>
  )
}

export default App