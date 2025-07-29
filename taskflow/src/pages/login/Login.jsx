function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#599DC7] w-[83.4vh] h-[83.4vh] ">
        <img className="relative bottom-[80px]"
          src="/TaskFlowlogo.png"
          alt="taskflow.png"
          width={250}
        />
        <h1>Bem-vindo(a)!</h1>
        <p>Conecte-se e continue criando explorando e evoluindo com a gente.</p>
      </div>

      <div className="bg-[#F4F4F4] w-[83.4vh] h-[83.4vh]">
        <h2>Login</h2>

        <div>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />

          <div>
            <input type="checkbox" />
            <p>Lembre-se</p>
            <div>
              <p>recuperar senha</p>
            </div>
          </div>
        </div>

        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;
