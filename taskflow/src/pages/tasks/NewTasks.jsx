import { X } from "lucide-react";
import { useState } from "react";
import Tasks from "./Tasks";
export default function NewTasks({ ViewTask, CreateTask }) {
  const [hide, setHide] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [term, setTerm] = useState("");
 
 
  return (
    <div
      className={`bg-[#fff] p-[10vh] w-[100%] max-w-[120vh] rounded-2xl ${hide ? "transition-all duration-700 ml-[100%] opacity-0" : "opacity-1000 "}`}
    >
      <X
        onClick={() => setHide(ViewTask)}
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
        <input className="bg-cyan-100 p-2 rounded-2xl" type="datetime-local"
        value={term}
        onChange={((e) => setTerm(e.target.value))}
        />
        <button onClick={() => CreateTask(title, description, term)} className="bg-cyan-100 p-2 w-[25vh]  m-auto rounded-2xl hover:bg-green-500"
        >
          Criar
        </button>
      </div>
    </div>
  );
}
