import { Trash } from "lucide-react";
import { Modal } from "../../components/ViewModal";
import { useModal } from "../../hooks/useModal";
import { useState } from "react";
import ViewTask from "./ViewTask";


export default function TableTask({Tasks, ViewClick, DeleteTask}) {

    const [detailsClick, setDetailsClick] = useState('')
    const modal = useModal()
    const tasks = Tasks


    function handleClick(taskId) {
      const handle = tasks.find(task => task.id === taskId )
      setDetailsClick(handle)
    }
    console.log(detailsClick)


    const savetask = tasks.map((task) => {
    return (
      <ul key={task.id} className="flex justify-center  ">
        <li
          onClick={() => ViewClick(task.id)}
          className="bg-cyan-100 m-2 p-2 w-[70vh] text-start rounded-2xl cursor-pointer "
        >
          {task.finish ? (
        <p className="line-through">{task.title}</p>) : ( task.title)}
        </li>

        <button  onClick={() => { modal.open(), handleClick(task.id)}}   className="bg-cyan-100 p-2 m-2 w-[20vh] rounded-2xl cursor-pointer">
          Visualizar tarefa
        </button>


        <button className="bg-cyan-100 p-2 m-2 w-[15vh] rounded-2xl cursor-pointer">
          Editar
        </button>
        <button onClick={() => DeleteTask(task.id)} className="cursor-pointer p-2"> <Trash className="" /> </button>
      </ul>
    );
  });



  return(
    <>
    {savetask}
 
    {modal.isOpen && (
        <Modal>
            <div className="absolute inset-0 flex items-center justify-center">
              
                <ViewTask ViewClick={ViewClick} Tasks={Tasks} onClose={modal.close} detailsClick={detailsClick}/>
            </div>
        </Modal>
    )}

    </>
  )

}