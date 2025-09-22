import { Link } from "react-router-dom";
import { useState } from "react";
export default function FormCadastro() {

const [name, setName] =  useState("")
const [email, setEmail]  = useState("")
const [pass, setPass]  = useState("")


 const handlesubmit = (e) => {
    e.preventDefault()


    console.log('Nome', name)
    console.log('Email:', email)
    console.log('Pass:', pass)
    alert("login realizado!")

    setName("");
    setEmail("");
    setPass("");

 }




  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <h1 className="text-[25px] m-5"> Cadastro</h1>

      <form onSubmit={handlesubmit} className="flex flex-col w-[300px] mb-22"
      
      >
        <input
         type="text"
         placeholder="Nome:"
         onChange={(e) => setName(e.target.value)}
         className="border-1 rounded-2xl m-2 p-1"
         />
        

        <input
         type="email"
         placeholder="Email:"
         onChange={(e) => setEmail(e.target.value)}
         className="border-1 rounded-2xl m-2 p-1"
         />


        <input
         type="password"
         placeholder="Senha:"
         onChange={(e) => setPass(e.target.value)}
         className="border-1 rounded-2xl m-2 p-1"
          />

        <div>
         <button type="submit" className="border-1 w-[150px] rounded-2xl m-3 text-[18px] cursor-pointer ">Cadastra-se</button>
        </div>

        <Link>Já possui uma conta?</Link>
      </form>
    </div>
  );
}
