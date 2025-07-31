function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#aaafb1] overflow-y-hidden">
      <div className="bg-[#599DC7] w-[83.4vh] h-[83.4vh] ">
        <img className="relative bottom-[80px]"
          src="/TaskFlowlogo.png"
          alt="taskflow.png"
          width={250}
        />
        <h1 className="text-[30px] text-center">Bem-vindo(a)!</h1>
        <p className="text-[25px] text-center p-2.5">Conecte-se e continue criando <br /> explorando e evoluindo com a gente.</p>
      </div>

      <div className="bg-[#F4F4F4] w-[83.4vh] h-[83.4vh]  text-center">
        <div className="justify-center items-center h-screen flex flex-col">
        <h2 className="text-[35px] mb-[]">Login</h2>

        <div className="flex flex-col items-center">
          <input className="flex-col border-black w-[35vh] bg-[rgba(101,125,134,0.27)] p-[10px] m-2.5 rounded-2xl" type="email" placeholder="Email:" />
          <input className="flex-col border-black w-[35vh] bg-[rgba(101,125,134,0.27)] p-[10px] m-2.5 rounded-2xl" type="password" placeholder="Senha:" />

          <div className="flex justify-around gap-12">
            <div className="flex">
            <input className="m-1" type="checkbox"/>
            <p>Lembre-se</p>
            </div>
            <div>
              <p>recuperar senha</p>
            </div>
          </div>
        </div>

        <button className="text-[18px] mt-3 bg-[rgba(101,125,134,0.27)] p-[10px] w-[90px] rounded-2xl cursor-pointer">Login</button>
      </div>
      </div>
    </div>
  );
}

export default Login;
