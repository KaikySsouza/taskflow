import FormCadastro from "./FormCadastro"
function Cadastro() {
    return(
        <div className="flex justify-center text-center items-center h-screen  bg-[#aaafb1] font-Roboto overflow-y-hidden">
            <div className="bg-[#599DC7] w-[83.4vh] h-[83.4vh] ">
                <img className="absolute top-0" width={290} src="/TaskFlowlogo.png" alt="task.png" />
                <h1 className="  text-[30px] relative top-[40%] ">Comece sua jornada</h1>
                <p className="text-[25px] relative top-[45%]">Você está a um passo de organizar sua vida.</p>
            </div>

            <div className=" bg-[#F4F4F4] w-[83.4vh] h-[83.4vh]">
 
            <FormCadastro/>

            </div>
            
        </div>
    )
}   

export default Cadastro