import { useState } from "react";

export default function NewExpenses() {
  const [description, setDescription] = useState('')  
  const [value, setValue] = useState('') 
  const [data, setData] = useState('') 
  const [payment, setPayment] = useState('') 
  const [save, setSave] = useState('')

  console.log(save)

  return (
    <>
      <h1 className="text-[25px] m-5 mt-[5vh] text-center">
        Planejamento Financeiro
      </h1>

      <span className="grid grid-cols-3 gap-2 ">
        <input
          className="bg-gray-400 w-100 p-3 rounded-2xl"
          type="text"
          placeholder="Descrição do gasto:"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          className="bg-gray-400 w-100 p-3 rounded-2xl"
          type="text"
          placeholder="Valor (R$):"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          className="bg-gray-400 w-100 p-3 rounded-2xl"
          type="datetime-local"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />

        <select className="bg-gray-400 w-100 p-3 rounded-2xl "
        value={data}
        onChange={(e) => setData(e.target.value)}
        
        >

          <option>Select...</option>
          <option>Alimentação</option>
          <option>Transporte</option>
          <option>Lazer</option>
          <option>Contas</option>
          <option>Outros</option>
        </select>

        <select className="bg-gray-400 w-100 p-3 rounded-2xl"
        value={payment}
        onChange={(e) =>  setPayment(e.target.value)}
        
        >
          <option>Pagamento</option>
          <option>Dinheiro</option>
          <option>Cartão</option>
          <option>Pix</option>
        </select>

        <button value={save} onSubmit={(e) => setSave(e.target.value)} className="bg-gray-400 w-100 p-3 rounded-2xl hover:bg-green-500">
          Confirmar!
        </button>
      </span>
    </>
  );
}
