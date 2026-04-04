import {
  FileCheckCorner,
  HandCoins,
  LayoutDashboard,
  Bell,
  UserRoundPen,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useModal } from "../hooks/useModal";
import { useState } from "react";

import MenuPerfil from "./MenuPerfil";
import MenuNotificacoes from "./MenuNotificacoes";

export default function Navbar() {
  const modal = useModal();
  const [modalAberto, setModalAberto] = useState(null);

  function handleClick(qual) {
    if (qual === "MenuPerfil") {
      setModalAberto("MenuPerfil");
    } else if (qual === "MenuNotificacoes") {
      setModalAberto("MenuNotificacoes");
    }
  }

  return (
    <>
      <header className="flex  bg-[#599dc7] shadow-xl/15 p-4 justify-baseline space-x-[173vh]">
        <p className=" text-[18px] font-bold  ">TaskFlow</p>

        <div className="flex  gap-25 cursor-pointer ">
          <div>
            <p
              onClick={() => handleClick("MenuNotificacoes")}
              className="cursor-pointer"
            >
              <Bell />
            </p>
            {modalAberto === "MenuNotificacoes" && <MenuNotificacoes />}
          </div>

          <div>
            <p
              onClick={() => handleClick("MenuPerfil")}
              className="cursor-pointer"
            >
              <UserRoundPen />
            </p>

            {modalAberto === "MenuPerfil" && <MenuPerfil />}
          </div>
        </div>
      </header>

      <nav className="flex flex-col bg-[#599dc7d7] h-[100vh] w-[60px] absolute">
        <ul className="">
          <li className="m-[2vh] mt-[10vh] cursor-pointer">
            <LayoutDashboard />
          </li>
          <li className="m-[2vh] mt-[10vh] cursor-pointer">
            <Link to={"/tarefas"}>
              <FileCheckCorner />
            </Link>
          </li>
          <li className="m-[2vh] mt-[10vh] cursor-pointer">
            <Link to={"/planejamento"}>
              <HandCoins />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
