import { useState } from "react";
import { X } from "lucide-react";
import Default from "../../components/DatePicker";
export default function EditTask({ Tasks, onClose, editTask}) {
  const [titulo, setTitulo] = useState('')
  const [description, setDescription] = useState('')
  const [viewdate, setViewdate] = useState('')
  

  console.log(viewdate)
  function Edit(titulo, description) {
    
    editTask.title = titulo
    editTask.description = description
    editTask.term = viewdate
    
  }

  





  return (
    <div className=" bg-[#fff] p-[10vh] w-[100%] max-w-[120vh] rounded-2xl  ">
        
        <div className="flex justify-around gap-[35vh]">
      <h1 className="flex justify-center text-[28px] ml-[40vh] mb-10">Editar Tarefa</h1>
      <X onClick={() => onClose()}/> 
    </div>
        <div className="flex text-[24px] justify-center">
        {`${editTask.id}- ${editTask.title}`}
        
        </div>
        <div className="flex flex-col m-auto justify-center items-center ">
          <input className="bg-cyan-100 w-[30vh] m-5 p-2 gap-10 rounded-2xl"  placeholder="Título da tarefa:" value={titulo}  onChange={(e) => setTitulo(e.target.value)}/>
          <Default viewdate={viewdate} setViewdate={setViewdate} /> 
          <textarea className="bg-cyan-100   w-[30vh] m-5 p-2  gap-10 rounded-2xl " placeholder="Descrição:" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          <button className="bg-cyan-100 w-[30vh] p-2 m-5 rounded-2xl hover:bg-green-500 cursor-pointer " onClick={() => {Edit(titulo, description );  onClose()}} >Confirmar</button>
        </div>
        
    </div>
  );
}
