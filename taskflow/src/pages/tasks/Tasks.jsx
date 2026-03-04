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
      finish: false,
    },
    {
      id: 2,
      title: "Praticar JavaScript",
      description: "Resolver exercícios de lógica e manipulação de arrays",
      term: "15/10/2005 18:00:00",
      finish: false,
    },
    {
      id: 3,
      title: "Criar Projeto Front-End",
      description:
        "Desenvolver um projeto utilizando HTML, CSS e JavaScript puro",
      term: "20/10/2005 20:00:00",
      finish: false,
    },
    {
      id: 4,
      title: "Estudar APIs",
      description: "Aprender a consumir APIs utilizando fetch e async/await",
      term: "25/10/2005 19:00:00",
      finish: false,
    },
  ]);

  const [modal, setModal] = useState(false)
  const [view, setTask] = useState(false)
  

  console.log(tasks);

 // Função responsavel por validar qual task foi clicada.
 
 function ViewClick(taskId) {
  const newtask = tasks.map((task) => {
    if(task.id === taskId) {
      return {...task, finish: !task.finish}
    }else{
      return task
    }
  })
  setTasks(newtask)
 }

// Nova task

 function NewTask(title, description, term) {
  const newtask = {
    id: tasks.length + 1,
    title, 
    description, 
    term,
    finish: false
  }
  setTasks(...tasks, newtask)
}
  

 // Excluir task

 function DeleteTask(taskId) {
   const del  =  tasks.filter(task => task.id !== taskId)
    setTasks(del)
  }

// Resposavel por mostrar todas as tasks

  const salvar = tasks.map((task) => {
    return (
     
      <ul key={tasks.id} className="flex ">
        <li onClick={() => ViewClick(task.id)} className="bg-cyan-100 m-2 p-2 w-[70vh] text-start rounded-2xl cursor-pointer ">{task.title}</li>
        <button className="bg-cyan-100 p-2 m-2 w-[20vh] rounded-2xl cursor-pointer">Visualizar tarefa</button>
       <button className="bg-cyan-100 p-2 m-2 w-[15vh] rounded-2xl cursor-pointer">Editar</button>
       <button onClick={() =>  DeleteTask(task.id)} className="cursor-pointer p-2"><Trash className=""/></button>
      </ul>
   

    );
  }); 

  // Fechar o modal.

  function ViewTask() {
    if(view != modal){
      return setModal(false)
    }else{
      console.log('deu errado')
    }
  }
  
 
  // Possivel adicionar isso dentro do reder.

  return (
    <div className=" bg-gray-300 h-screen">
      
      <Navbar />

      {/* Esconder Tarefa */}

     

      {/* Criar tasks */}
      <header className="flex ">
        <div className={`bg flex text-center m-auto gap-3 justify-center cursor-pointer my-5   ${modal ? 'opacity-0 transition-all duration-400' : ''}`}>
        <h1 className="text-[30px]">Criar tarefa</h1>
        <button onClick={() => setModal(true)}>
          <FilePlusCorner/>
        </button>
        </div>
      
      </header>
        <div className={` m-auto  bg-[#fff] w-[100%] max-w-[120vh] rounded-2xl  ${modal ? 'opacity-0 pointer-events-none transition-all duration-700 ' : 'opacity-1000  '} `  } >
         
        <div className="flex justify-around gap-[90vh] my-2">
        <h2 className="text-[25px]">Tarefas</h2>
        <p className="mt-3 hover:underline">Ver mais</p>
        </div>
        {salvar}  
        
        {/* Motrar tasks */}
        
      </div>


      {/* Responsavel por mostrar e esconder o modal */}    
      <div className={`flex absolute inset-0 justify-center items-center  my-4  w-[50%] max-w-[120vh] rounded-2xl   ${modal ? 'opacity-1000 transition-all duration-1000 m-[25%] ' : 'opacity-0 pointer-events-none  transition-all duration-700' }`}> <NewTasks viewtask={ViewTask}/> </div>
      
    </div>
  );
}
