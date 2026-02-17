import {FileCheckCorner, HandCoins, LayoutDashboard, Bell, UserRoundPen} from 'lucide-react';

  export default function Navbar() {
  return (
    <>
    <header className='  bg-[#599dc7] shadow-xl/15 p-4'>
        <p className='absolute text-[18px] font-bold '>TaskFlow</p>
     

        <div className='flex gap-[10vh]  justify-end mr-10'>
          <p><Bell/></p>
          <p className=''><UserRoundPen/></p>
        </div>
     
    </header>
   
    
      <nav className='flex flex-col bg-[#599dc7d7] h-[100vh] w-[60px] absolute'> 
        <ul className=''>
          <li className='m-[2vh] mt-[10vh] cursor-pointer' ><LayoutDashboard/></li>
          <li className='m-[2vh] mt-[10vh] cursor-pointer'><FileCheckCorner /></li>
          <li className='m-[2vh] mt-[10vh] cursor-pointer'><HandCoins/></li>
        </ul>
      </nav>

      


 
  

    </>

   
  )
}


