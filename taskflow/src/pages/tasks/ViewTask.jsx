import { View } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";
import { datalist } from "motion/react-client";

export default function ViewTask({  detailsClick, onClose }) {
  const details = detailsClick;

  console.log(details);
  return (
    <div className=" bg-[#fff] flex flex-col w-[100%] max-w-[120vh] p-10 rounded-2xl ">
      <div className="flex justify-between ">
        <p className="ml-2 font-bold">#{details.id}</p>
        <h1 className="flex text-[24px] ">Task Overview</h1>
        <X onClick={() => onClose()}/>  
      </div>

      <div className="flex justify-between mt-10">
      <span className="text-[24px] ml-2">Tarefa: {details.title}</span>
      <span className="text-[18px] mt-1 font-medium">{details.term}</span>
       {/*      Colocar data e hora */}
      </div>
      <p className="text-[18px] ml-2 mt-10 bg-gray-300/60 p-5 rounded-2xl">Notas: {details.description}</p>
    </div>
  );
}
