import { Link } from "react-router-dom";
import { useState } from "react";
import { db } from "../../service/FireBase"
import { ref, set, push} from "firebase/database";



export default  function FormCadastro() {

const [name, setName] =  useState("")
const [email, setEmail]  = useState("")
const [pass, setPass]  = useState("")


  const handlesubmit = async (e) => {
    e.preventDefault()

    const usuariosRef =  ref(db, "usuarios");
    const novoUsuarioRef = push(usuariosRef);

   await set(novoUsuarioRef, {
      nome: name,
      email: email,
      senha: pass,
      
      

    })


    console.log('Nome', name)
    console.log('Email:', email)
    console.log('Pass:', pass)
    alert("login realizado!")

   setName("")
   setEmail("")
   setPass("")

 }




  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <h1 className="text-[25px] m-5"> Cadastro</h1>

      <form onSubmit={handlesubmit} className="flex flex-col w-[300px] mb-22" 
      
      >
        <input
         type="text"
         placeholder="Nome:"
         value={name}
         onChange={(e) => setName(e.target.value)}
         className=" border-black w-[35vh] bg-[rgba(101,125,134,0.27)] p-[10px] m-2.5 rounded-2xl"
         />
        

        <input
         type="email"
         placeholder="Email:"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         className=" border-black w-[35vh] bg-[rgba(101,125,134,0.27)] p-[10px] m-2.5 rounded-2xl"
         />


        <input
         type="password"
         placeholder="Senha:"
         value={pass}
         onChange={(e) => setPass(e.target.value)}
         className=" border-black w-[35vh] bg-[rgba(101,125,134,0.27)] p-[10px] m-2.5 rounded-2xl"
          />

        <div>
         <button type="submit" className=" border-black w-[20vh] bg-[rgba(101,125,134,0.27)] p-[10px] m-2.5 rounded-2xl cursor-pointer ">Cadastra-se</button>
        </div>

        <Link>Já possui uma conta?</Link>
      </form>
    </div>
  );
}
