import { useState } from "react";
import Navbar from "../../components/Navbar";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import NewExpenses from "./NewExpenses";
import ViewModal from "./ViewModal";

export default function Finance() {
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
      value: "120,50",
      data: "12/12/2025 18:30",
      payment: "cartão de crédito",
      type: "alimentação",
    },
    {
      id: 3,
      description: "Internet",
      value: "89,90",
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
  
  const [modal, setModal] = useState(false)

  console.log(expenses);

 // RESPONSAVEL POR RETORNA OS GASTOS.

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
  

 
  

  // CRIAR GASTOS

  function NewExpense(description, value, data, type,  payment) {
    console.log("chamou!", description, value, data, type, payment) // adiciona isso
   const news = {
    id: expenses.id + 1,
    description,
    value,
    data,
    type,
    payment,   
    }
    setExpenses([...expenses, news])
  }


  return (
    <>
      <Navbar />
      <div className=" bg-gray-300 h-screen flex flex-col  items-center " > 
        
      

        <NewExpenses  newexpenses={NewExpense} />
        <div className="bg-[#338f8420] my-10 rounded-2xl w-[142vh] justify-center m-auto">
       
          
          <span className="m-auto flex justify-between p-4">
          <h2 className="text-[25px]  ">Despesas</h2>
          <button onClick={() => setModal(true)}  className="cursor-pointer hover:underline ">Ver mais</button>
          </span>

          <div className={`flex justify-center items-center ${modal ? 'opacity-1000 transition-all duration-700 ' : 'hidden'}`} ><ViewModal newexpenses={NewExpense}/></div>
       
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
