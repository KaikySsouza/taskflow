import Navbar from "../../components/Navbar";
import { FilePlusCorner, Trash } from "lucide-react";
import NewTasks from "./NewTasks";
import { useState } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Apreender React",
      description: "Estudar todos os dias os conceitos de hooks e props",
      term: "10/10/2005 12:00:00",
      finish: "false",
    },
    {
      id: 2,
      title: "Praticar JavaScript",
      description: "Resolver exercícios de lógica e manipulação de arrays",
      term: "15/10/2005 18:00:00",
      finish: "false",
    },
    {
      id: 3,
      title: "Criar Projeto Front-End",
      description:
        "Desenvolver um projeto utilizando HTML, CSS e JavaScript puro",
      term: "20/10/2005 20:00:00",
      finish: "false",
    },
    {
      id: 4,
      title: "Estudar APIs",
      description: "Aprender a consumir APIs utilizando fetch e async/await",
      term: "25/10/2005 19:00:00",
      finish: "false",
    },
  ]);

  console.log(tasks);




  const salvar = tasks.map((task) => {
    return (
     
      <ul className="flex ">
        <li className="bg-cyan-100 m-2 p-2 w-100 text-start rounded-2xl cursor-pointer ">{task.title}</li>
       <button className="bg-cyan-100 p-2 m-2 w-[15vh] rounded-2xl cursor-pointer">Editar</button>
       <button className="cursor-pointer p-2"><Trash className=""/></button>
      </ul>
   

    );
  }); // Possivel adicionar isso dentro do reder.



  return (
    <div className=" bg-gray-300 h-screen">
      <Navbar />

      <header className="flex text-center gap-3 justify-center cursor-pointer my-5">
        <h1 className="text-[30px] ">Criar tarefa</h1>
        <button className="">
          <FilePlusCorner/>
        </button>
      </header>

      <div className="flex flex-col m-auto  bg-[#fff] w-[80vh] rounded-2xl ">
        <div className="flex justify-around gap-[55vh] my-2">
        <h2 className="text-[25px]">Tarefas</h2>
        <p className="mt-3 hover:underline">Ver mais</p>
        </div>
        {salvar}
        <NewTasks />
      </div>
    </div>
  );
}
