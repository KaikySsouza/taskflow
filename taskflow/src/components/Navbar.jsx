import { Menu, FileCheckCorner, HandCoins, LayoutDashboard, Bell, UserRoundPen} from 'lucide-react';
import { useState } from 'react';
function Navbar() {
  const [menu, setMenu] = useState('')

  function ViewMenu() {
    return setMenu( 
      <>
       <ul>
      <li>DashBoard</li>
      <li>Tarefas</li>
      <li>Gastos</li>
    </ul> </>)}

  return (
    <>
    <header className='  bg-[#599dc7] p-4'>
        <p className='absolute text-[18px] font-bold '>TaskFlow</p>
     

        <div className='flex gap-[10vh]  justify-end mr-10'>
          <p><Bell/></p>
          <p className=''><UserRoundPen/></p>
        </div>
     
    </header>
   
     <body>
      
    
      <nav className='flex flex-col bg-[#599dc7d7] h-[100vh] w-[60px]'> 
        <ul className=''>
          <li className='m-[2vh] mt-[7vh]'><Menu/></li>
          <li className='m-[2vh] mt-[10vh]'><LayoutDashboard/></li>
          <li className='m-[2vh] mt-[10vh]'><FileCheckCorner /></li>
          <li className='m-[2vh] mt-[10vh]'><HandCoins/></li>
        </ul>
      </nav>

       </body>
  

    </>

   
  )
}

export default Navbar;
