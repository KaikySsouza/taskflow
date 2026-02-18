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
      <ul className="">
        <li className="bg-cyan-100 m-2 p-2 w-100 text-start rounded-2xl ">{task.title} 
        <button className=" items-end"><Trash/></button>
        </li>
      </ul>
    );
  }); // Possivel adicionar isso dentro do reder.

  return (
    <div className=" bg-gray-300 h-screen">
      <Navbar />

      <header className="flex text-center gap-3 justify-center cursor-pointer">
        <h1 className="text-[30px] my-5">Criar tarefa</h1>
        <button className="">
          <FilePlusCorner />
        </button>
      </header>

        <h2 className="text-[25px] text-center">Tarefas</h2>
      <div className="flex flex-col m-auto items-center ">
        {salvar}
        <NewTasks />
      </div>
    </div>
  );
}
