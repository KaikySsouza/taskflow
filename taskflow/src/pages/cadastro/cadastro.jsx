function Cadastro() {
    return(
        <div className="flex justify-center text-center items-center h-screen rounded-b-4xl ">
            <div className="bg-[#599DC7] w-[63.4vh] h-[63.4vh] ">
                <img className="absolute top-20" width={250} src="/TaskFlowlogo.png" alt="task.png" />
                <h1 className="  text-[30px] relative top-[40%] ">Comece sua jornada</h1>
                <p className="text-[25px] relative top-[45%]">Você está a um passo de organizar sua vida.</p>
            </div>

            <div className=" bg-[#F4F4F4] w-[63.4vh] h-[63.4vh]">

                <h2  className="text-[30px] relative top-[25%]">Cadastro</h2>
                <div className="flex flex-col relative top-[32%] justify-center items-center">
                <input className="flex-col border-black w-[30vh] bg-[rgba(101,125,134,0.27)] p-[10px] m-2.5 rounded-2xl " type="text" placeholder="Nome"/>
                <input className="flex-col border-black w-[30vh] bg-[rgba(101,125,134,0.27)] p-[10px] m-2.5 rounded-2xl  "  type="email" placeholder="E-mail" />
                <input className="flex-col border-black w-[30vh] bg-[rgba(101,125,134,0.27)] p-[10px] m-2.5 rounded-2xl "  type="password" placeholder="Senha" />

                <button className="text-[18px] mt-3 bg-[rgba(101,125,134,0.27)] p-[10px] rounded-2xl cursor-pointer">Cadastrar-se</button>
                <a className="text-[15px]" href="#">Já possui uma conta?</a>
                </div> 
            </div>
        </div>
    )
}   

export default Cadastro