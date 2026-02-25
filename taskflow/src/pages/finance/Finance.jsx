import { useState } from "react";
import Navbar from "../../components/Navbar";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import NewExpenses from "./NewExpenses";

export default function Finance() {
  const [view, setView] = useState('')
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Gasolina",
      value: "15,00",
      data: "10/12/2025 23:00",
      payment: "pix",
      type: "alimentação",
    },
    {
      id: 2, 
      description: "Supermercado",
      valor: "120,50",
      data: "12/12/2025 18:30",
      payment: "cartão de crédito",
      type: "alimentação",
    },
    {
      id: 3,
      description: "Internet",
      valor: "89,90",
      data: "15/12/2025 09:00",
      payment: "débito automático",
      type: "fixo",
    },
    {
      id: 4,
      description: "Academia",
      value: "99,90",
      data: "20/12/2025 07:00",
      payment: "pix",
      type: "saúde",
    },
  ]);

  console.log(expenses);



  const save = expenses.map((exp) => {
    return (
      <ul  className="bg-cyan-100 w-[138vh]  m-3  grid grid-cols-4 p-3">
        <p>{exp.description}</p>
        <p>{exp.value} R$</p>
        <p>{exp.payment} </p>
        <p>{exp.type}</p>
      </ul>
    );
  });
  


  function ViewModal() {
    setView(  
          <div className=" absolute flex p-[10vh] h-[80%] rounded-2xl bg-[#f5fffeec] w-[142vh] my-10 ">
         <div>
          <div className="flex justify-between my-5">
          <h1 className="text-[25px]">Tabela</h1>
          <X />
          </div>
          <div className="grid grid-cols-4 gap-[18vh] ">
            <p className="m-auto">Descrição</p>
            <p>Valor(R$)</p>
            <p>Forma de Pagamento</p>
            <p>Categoria</p>
          </div>
          
          <span>  {/* MOSTRAR ÚLTIMAS INFORMAÇÕES DE GASTOS */}
            {save}
          </span>
        </div>
      </div>
  )}
  



  return (
    <>
      <Navbar />
      <div className=" bg-gray-300 h-screen flex flex-col  items-center " > 
        
      {view}

        <NewExpenses />
        <div className="bg-[#338f8420] my-10 rounded-2xl w-[142vh] justify-center m-auto">
       
          
          <span className="m-auto flex justify-between p-4">
          <h2 className="text-[25px]  ">Despesas</h2>
          <p onClick={ViewModal}  className="cursor-pointer hover:underline ">Ver mais</p>
          
          </span>
       
         {/* ADICIONAR EDITAR E EXCLUIR */}
         
          <div className="grid grid-cols-4 ">
            <p className="ml-5">Descrição</p>
            <p>Valor(R$)</p>
            <p>Forma de Pagamento</p>
            <p>Categoria</p>
          </div>
          
          <span>  {/* MOSTRAR ÚLTIMAS INFORMAÇÕES DE GASTOS */}
            {save}
          </span>
         </div> 
        </div>
    </>
  );
}
