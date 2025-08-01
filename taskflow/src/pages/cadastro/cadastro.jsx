import { Link } from 'react-router-dom'
function Cadastro() {
    return(
        <div className="flex justify-center text-center items-center h-screen  bg-[#aaafb1] font-Roboto ">
            <div className="bg-[#599DC7] w-[83.4vh] h-[83.4vh] ">
                <img className="absolute top-0" width={290} src="/TaskFlowlogo.png" alt="task.png" />
                <h1 className="  text-[30px] relative top-[40%] ">Comece sua jornada</h1>
                <p className="text-[25px] relative top-[45%]">Você está a um passo de organizar sua vida.</p>
            </div>

            <div className=" bg-[#F4F4F4] w-[83.4vh] h-[83.4vh]">

                <h2  className="text-[30px] relative top-[29%]">Cadastro</h2>
                <div className="flex flex-col relative top-[32%] justify-center items-center">
                <input className="flex-col border-black w-[35vh] bg-[rgba(101,125,134,0.27)] p-[10px] m-2.5 rounded-2xl " type="text" placeholder="Nome:"/>
                <input className="flex-col border-black w-[35vh] bg-[rgba(101,125,134,0.27)] p-[10px] m-2.5 rounded-2xl  "  type="email" placeholder="Email:" />
                <input className="flex-col border-black w-[35vh] bg-[rgba(101,125,134,0.27)] p-[10px] m-2.5 rounded-2xl "  type="password" placeholder="Senha:" />

                <button className="text-[18px] mt-3 bg-[rgba(101,125,134,0.27)] p-[10px] rounded-2xl cursor-pointer">Cadastrar-se</button>
                <Link  to="/login" className="text-[15px]">Já possui uma conta?</Link>
                </div> 
            </div>
            
        </div>
    )
}   

export default Cadastro