import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/cadastro/Cadastro/"
import Login from "./pages/login/Login"
import Home from "./pages/Home/home";
import Tasks from "./pages/tasks/Tasks";
import Finance from "./pages/finance/Finance";


function App() {
  return(
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} />      
        <Route path="/home" element={<Home/>}/>
        <Route path="/tarefas" element={<Tasks/>}/>
        <Route path="/planejamento" element={<Finance/>}/>
 
      </Routes>
    </Router>
  )
}

export default App
