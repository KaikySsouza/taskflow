import { useState } from "react";
import { X } from "lucide-react";
export default function EditTask({ Tasks, onClose }) {
  const tasks = Tasks;

  const SelectTask = tasks.map((task) => {
    return <option className="">{task.title}</option>;
  });

  return (
    <div className=" bg-[#fff] p-[10vh] w-[100%] max-w-[120vh] rounded-2xl  ">
        
        <div className="flex justify-around gap-[35vh]">
      <h1 className="flex justify-center text-[24px] ml-[40vh] mb-10">Editar Tarefa</h1>
      <X onClick={() => onClose()}/> 
    </div>
      <div className="flex justify-around gap-[10vh] ">
        <select className="bg-cyan-100 p-2 rounded-2xl border border-gray-300  cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Escolha uma tarefa</option>
          <hr />
          {SelectTask}
        </select>

    </div>

        <div className="flex   p-2  ">
          <input className="bg-cyan-100 w-[30vh] m-5 gap-10 rounded-2xl"  placeholder="Título da tarefa" />
          <textarea className="bg-cyan-100  w-[30vh] m-5 gap-10 rounded-2xl" placeholder="Descrição"></textarea>
          <input className="bg-cyan-100 w-[30vh] m-5 gap-10 rounded-2xl" type="date" />
        </div>
      
    
    </div>
  );
}
