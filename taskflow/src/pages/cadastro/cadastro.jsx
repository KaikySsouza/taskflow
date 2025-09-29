import FormCadastro from "./FormCadastro"
function Cadastro() {
    return(
        <div className="flex justify-center items-center h-screen  bg-[#aaafb1] font-Roboto overflow-y-hidden">


            <div className="hidden md:flex w-full  bg-[#599dc7] h-full flex-col  ">


                <img className="absolute bottom-[70%]"
                 width={290}
                  src="/TaskFlowlogo.png"
                   alt="task.png" />
              <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-[47px] m-5  ">Comece sua jornada</h1>

                <p className="text-[36px] ">Você está a um passo de organizar sua vida.</p>
</div>
            </div>

            <div className="w-full md:flex-2/2 bg-[#aaafb1]  ">
 
            <FormCadastro/>

            </div>
            
        </div>
    )
}   

export default Cadastro