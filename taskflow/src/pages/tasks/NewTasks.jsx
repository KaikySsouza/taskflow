import { X } from "lucide-react"
import { useState } from "react"
export default function NewTasks({ viewtask }) {

    const [hide, setHide] = useState(false)

    return(
        <div className={`bg-[#fff] p-[10vh] w-[100%] max-w-[120vh] rounded-2xl ${hide ? 'transition-all duration-700 ml-[100%] opacity-0' : 'opacity-1000 '}`} >
        <X  onClick={() => setHide(viewtask)} className={`transition-all duration-700 flex relative ml-[100%] bottom-10 left-[5%]`}/> 
        <div className="flex flex-col space-y-4 my-3">
        <h1 className="text-center text-[25px]">Nova Tarefa</h1>
        <input className="bg-cyan-100 p-2 rounded-2xl" placeholder="Tarefa:" type="text" />
        <input className="bg-cyan-100 p-2 rounded-2xl" placeholder="Descrição" type="text" />
        <input className="bg-cyan-100 p-2 rounded-2xl" type="datetime-local" />
        <button  o className="bg-cyan-100 p-2 w-[25vh]  m-auto rounded-2xl hover:bg-green-500" >Criar</button>
        </div>
        </div>
    )
}