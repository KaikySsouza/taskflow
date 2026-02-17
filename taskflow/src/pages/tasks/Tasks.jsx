import Navbar from "../../components/Navbar"

export default function Tasks() {
    return (
        <>
        <Navbar/> 
        
        <div className="flex flex-col text-center  items-center bg-gray-300 "> 
            
            <h1 className="text-[30px] my-5">Criar tarefa</h1>
            <div className="grid grid-cols-2 gap-2">
            <input type="text" placeholder="Tarefa:" className="w-100 bg-gray-400 my-2 p-2 rounded-2xl"/>
            <input type="week" className="w-100 bg-gray-400 my-2 p-2 rounded-2xl"/>
            
            <input type="text" placeholder="Descrição:" className="w-100 bg-gray-400 my-2 p-2 rounded-2xl"/>
            <span> 
            <button className="w-49 mr-2 bg-gray-400 my-2 p-2 rounded-2xl cursor-pointer">Simples</button>
            <button className="w-49 mr-2 bg-gray-400 my-2 p-2 rounded-2xl cursor-pointer" >Prioridade</button>
            </span>
            </div>
            <button type="button" className="my-5 bg-gray-400 w-[20vh] h-[6vh] rounded-2xl">Criar</button>
         
        </div>
        </>
    )
}