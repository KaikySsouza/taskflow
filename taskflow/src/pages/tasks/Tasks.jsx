import Navbar from "../../components/Navbar";
import { FilePlusCorner  } from "lucide-react";
import NewTasks from "./NewTasks";
import { useState } from "react";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../../components/ViewModal";
import TableTask from "./TableTask";
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

  const modal = useModal(false);

  console.log(tasks);

  // Função responsavel por validar qual task foi clicada.

  function ViewClick(taskId) {
    const newtask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, finish: !task.finish };
      } else {
        return task;
      }
    });
    setTasks(newtask);
    console.log(newtask);
  }

  // Criar Tasks

  function CreateTask(title, description, term) {
    const newtask = {
      id: tasks.length + 1,
      title,
      description,
      term,
      finish: false,
    };
    setTasks([...tasks, newtask]);
  }

  // Excluir task

  function DeleteTask(taskId) {
    const del = tasks.filter((task) => task.id != taskId);
    setTasks(del);
  }


  // Possivel adicionar isso dentro do reder.

  return (
    <div className=" bg-gray-300 h-screen">
      <Navbar />

      {/* Esconder Tarefa */}

      {/* Criar tasks */}
      {/*  parte do modal responsavel por esconder o titulo */}
      <header className="flex">
        <div
          onClick={modal.open}
          className="flex m-auto text-[30px]  cursor-pointer mt-10"
        >
          Criar tarefa <FilePlusCorner className="m-auto " />
        </div>

        {modal.isOpen && (
          <Modal>
            <div className="absolute justify-center items-center flex inset-0">
              <NewTasks CreateTask={CreateTask} onClose={modal.close} />
            </div>
          </Modal>
        )}

        


      </header>

      <div 
        className={`m-auto  bg-[#fff] w-[100%] max-w-[120vh] rounded-2xl mt-10 `}
      >
        <div className="flex justify-around gap-[90vh] my-2">
          <h2 className="text-[25px]">Tarefas</h2>
          <p className="mt-3 hover:underline cursor-pointer">Ver mais</p>
        </div>
        
      <TableTask Tasks={tasks} ViewClick={ViewClick} DeleteTask={DeleteTask}/>
      </div>
    </div>
  );
}
