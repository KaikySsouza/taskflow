import { X } from "lucide-react";

export default function ViewModal({newexpenses}) {



  return (
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
        
        <san>{/* MOSTRAR ÚLTIMAS INFORMAÇÕES DE GASTOS */}
            {newexpenses}
        </san>
      </div>
    </div>
  );
}
