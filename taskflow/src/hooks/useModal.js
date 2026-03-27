// Como é um hook e ele não retona nenhuma tag html pode ser só js

import { useState } from "react";

export function useModal(){
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen)
  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen(prev => !prev),
  }
}