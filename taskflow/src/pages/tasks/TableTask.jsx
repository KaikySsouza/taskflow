import { Trash } from "lucide-react";
import { Modal } from "../../components/ViewModal";
import { useModal } from "../../hooks/useModal";
import { use, useState } from "react";
import ViewTask from "./ViewTask";
import EditTask from "./EditTask";


export default function TableTask({Tasks, ViewClick, DeleteTask}) {

    const [detailsClick, setDetailsClick] = useState('')
    const [editTask, setEditTask] = useState('')
    const [modalAberto, setModalAberto] = useState(null)
    const modal = useModal()
    const tasks = Tasks
 

    function handleClick(taskId) {
      const handle = tasks.find(task => task.id === taskId )
      setDetailsClick(handle)
    }
    console.log(detailsClick)


    
function botao(qual) {
    if(qual === 'botao1'){
        setModalAberto('botao1')
    } else if(qual === 'botao2'){
        setModalAberto('botao2')
    }
}
   


  function TaskEdit(taskId) {
    const edit = tasks.find((task) => task.id === taskId)

    setEditTask(edit)
  }

  

  

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

        <button onClick={() => {botao('botao1');  handleClick(task.id)}}   className="bg-cyan-100 p-2 m-2 w-[20vh] rounded-2xl cursor-pointer">
          Visualizar tarefa
        </button>


        <button onClick={() => {botao('botao2'); TaskEdit(task.id)}} className="bg-cyan-100 p-2 m-2 w-[15vh] rounded-2xl cursor-pointer">
          Editar
        </button>
        <button onClick={() => DeleteTask(task.id)} className="cursor-pointer p-2"> <Trash className="" /> </button>
      </ul>
    );
  });



  return(
    <>
    {savetask}
 
    {modalAberto === 'botao1'  && (
        <Modal>
            <div className="absolute inset-0 flex items-center justify-center">
              
                <ViewTask ViewClick={ViewClick} Tasks={Tasks} onClose={() => setModalAberto(null)} detailsClick={detailsClick}/>
            </div>
        </Modal>
    )}

       {modalAberto === 'botao2'  && (
        <Modal>
            <div className="absolute inset-0 flex items-center justify-center">
                <EditTask onClose={() => setModalAberto(null)}  Tasks={Tasks} editTask={editTask}/>
            </div>
        </Modal>
    )}



    </>
  )

}