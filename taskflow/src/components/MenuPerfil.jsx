import { UserRoundPen, ArrowLeftFromLine, SunMoon } from "lucide-react";

export default function MenuPerfil() {
  return (
    <div className=" flex absolute top-15  h-full  right-0">
      <ul className="bg-[#fff] p-3 space-y-4  text-center text-[18px] ">
        <div className="mb-10 mt-4 flex gap-5">
          <img src="/FotoPerfil.jpg" width={70} />
          <div>
            <h1 className="text-start">Kaiky Souza </h1>
            <p>kaikybelga@gmail.com</p>
            
          </div>
        </div>
          <div className="bg-gradient-to-r from-blue-400 to-cyan-300 p-1  mb-10"></div>
        <div className="  ">
          <li className="flex gap-5 m-2 space-y-10  rounded-2xl">
            <span>
              <UserRoundPen /> 
            </span>
            <span  className="cursor-pointer hover:underline" >Perfil</span> 
          </li>
          <li className="flex gap-5 m-2 space-y-[100%]  rounded-2xl">
            <span>
              <SunMoon />
            </span>
            <span className="cursor-pointer hover:underline" >Tema</span>
          </li>
          <li className="flex gap-5 m-2  rounded-2xl">
            <span>
              <ArrowLeftFromLine />
            </span>
            <span className="cursor-pointer hover:underline" >Sair</span>
          </li>
        </div>
      </ul>
    </div>
  );
}
