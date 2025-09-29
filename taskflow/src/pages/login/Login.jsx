import { Link } from 'react-router-dom'
function Login() {
  return (
    
    <div className="flex">


      
      <div className="bg-[#599DC7] hidden md:flex w-full  flex-col ">
        <img className="relative bottom-[80px]"
          src="/TaskFlowlogo.png"
          alt="taskflow.png"
          width={250}
        />
        <h1 className="text-[8vh] text-center">Bem-vindo(a)!</h1>
          <p className="text-[6vh] text-center p-[4vh] ">Conecte-se e continue criando <br /> explorando e evoluindo com a gente.</p>
      </div>



      <div className="bg-[#aaafb1]  w-full md:flex-2/2 text-center">
        <div className="justify-center items-center h-screen flex flex-col">
        <h2 className="text-[35px] mb-[5vh]">Login</h2>

        <div className="flex flex-col items-center p-2">
          <input className="flex-col border-black w-[48vh] bg-[rgba(101,125,134,0.73)] p-[10px] m-2.5 rounded-2xl" type="email" placeholder="Email:" />
          <input className="flex-col border-black w-[48vh] bg-[rgba(101,125,134,0.73)] p-[10px] m-2.5 rounded-2xl" type="password" placeholder="Senha:" />

          <div className="flex justify-around gap-30">
            <div className="flex">
            <input className="m-1" type="checkbox"/>
            <p className="mb-0.5">Lembre-se</p>
            </div>
            <div>
              <p>recuperar senha</p>
            </div>
          </div>
        </div>

        <button className="text-[18px] mt-3 bg-[rgba(101,125,134,0.27)] p-[10px] w-[35vh] rounded-2xl cursor-pointer">Login</button>
        <Link to={"/cadastro"}>Criar conta!</Link>
      </div>
      </div>
    </div>
  );
}

export default Login;
