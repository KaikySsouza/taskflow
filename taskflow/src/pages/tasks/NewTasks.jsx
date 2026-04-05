import { X } from "lucide-react";
import { useState } from "react";
import {NewTaskDate} from "../../components/DatePicker";


export default function NewTasks({ ViewTask, CreateTask, onClose}) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [newtaskViewDate, setNewtaskViewdate] = useState('')
  const term = newtaskViewDate
  console.log(term)
  return (
    <div 
     className={`bg-[#fff] p-[10vh] w-[100%] max-w-[120vh] rounded-2xl } `}
        >
      <X onClick={() => onClose()}
   
        
        className={`transition-all duration-700 flex relative ml-[100%] bottom-10 left-[5%]`}
      />
      <div className="flex flex-col space-y-4 my-3">
        <h1 className="text-center text-[25px]">Nova Tarefa</h1>
        <input
          className="bg-cyan-100 p-2 rounded-2xl"
          placeholder="Tarefa:"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="bg-cyan-100 p-2 rounded-2xl"
          placeholder="Descrição"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}

        />
        <div className="bg-cyan-100 p-1 rounded-2xl"> <NewTaskDate setNewtaskViewdate={setNewtaskViewdate} /> </div>
       

        <button onClick={() => {CreateTask(title, description, term); onClose()}} className="bg-cyan-100 p-2 w-[25vh]  m-auto rounded-2xl hover:bg-green-500"
        >
          Criar
        </button>
      </div>
    </div>
  );
}
