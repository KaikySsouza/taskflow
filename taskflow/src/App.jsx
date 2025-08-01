import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/cadastro/Cadastro/"
import Login from "./pages/login/Login"

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} />      
      </Routes>
    </Router>
  )
}

export default App
