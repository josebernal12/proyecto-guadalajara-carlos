
const Login = () => {
  return (
    <div className="container-xl">
      <div className="flex md:justify-center md:items-center">
        <div className="shadow-lg text-start p-5 col-span-2">

          <h1 className="font-bold text-2xl mb-2">CRM</h1>
          <h3 className="text-blue-700 font-bold text-2xl mb-2">Bienvenido</h3>
          <form >
            <div className="grid md:grid-cols-2 gap-5 ">
              <div className="flex flex-col justify-center items-center" >
                <label htmlFor="email">Correo</label>
                <input type="text" id="email" name="email" placeholder="correo@correo.com" className="text-center rounded-md border p-1 w-full" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" placeholder="********" className="text-center rounded-md border p-1 w-full" />
              </div>
            </div>
            <div className="flex items-center my-5">
              <div className="border border-black w-full"></div>
              <div className="mx-2">or</div>
              <div className="border border-black w-full"></div>
            </div>
            <div className="flex flex-col space-y-3">
              <button className="flex items-center justify-center gap-2 border rounded-md p-3">
                <img className="w-6" src="/google.svg" alt="image google" />
                Sign In With Google
              </button>
              <button className="flex items-center justify-center gap-2 border rounded-md p-3">
                <img className="w-6" src="/facebook.svg" alt="imagen facebook" />
                Sign In With Facebook
              </button>
            </div>
            <div className="flex justify-end mt-2">
              <a href='#' className="text-blue-700 font-bold">Forgot Password?</a>
            </div>
            <button className="w-full bg-blue-700 text-white rounded-md p-2 my-3 font-bold hover:bg-blue-600">Sign In to your Account</button>
            <a href='#' className="text-center mt-2 text-gray-500">Dont Have an account? <span className="text-blue-700 font-bold">Sign Up</span></a>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login