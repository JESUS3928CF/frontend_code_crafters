import NavBar from "./components/NavBar"

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div>
        <div className="h-screen">
          <div className="pl-20 flex flex-col bg-blue-200 h-64 justify-center">
            <div className="mb-3 w-1/4">
              <h1 className="text-3xl font-semibold">AQUÍ TE BRINDAMOS AYUDA</h1>
            </div>
            <div className="w-1/3 mb-5">
              <p>Como crees que podemos mejorar para evitar la desercion de las carreras STEM?</p>
            </div>
            <div>
              <input type="text" className="px-20 py-2 mr-5 text-start rounded-lg" />
              <button className="px-6 py-2 text-white bg-sky-700 hover:bg-sky-500 rounded-lg">
                Enviar
              </button>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage