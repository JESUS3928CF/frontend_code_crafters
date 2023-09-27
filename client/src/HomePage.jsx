import NavBar from "./components/NavBar"

const HomePage = () => {
  return (
    <div>
        <NavBar/>
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
                <input className="px-20 py-2 mr-5 text-start" type="text" />
                <button className="px-6 py-2 text-white bg-blue-600 rounded-lg">
                  Enviar
                </button>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
        {/* <div className="flex flex-col h-screen justify-center items-center">
          <h1 className="font-medium m-5">Apoyos</h1>
          <div className="p-8 flex flex-col justify-center border-black border-2 rounded-lg">
            <h2>Te ayudaremos a encontrar el apoyo que necesitas</h2>
            <div>
              <h1>¿A qué institución educativa perteneces?</h1>
              <input className="" type="text" placeholder="Escribe aquí"/>
            </div>
            <div>
              <select name="" id="">
                <option value="">Selecciona...</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
            <button className="bg-blue-600 rounded-lg text-white">
              Buscar apoyo
            </button>
          </div>
        </div> */}
    </div> 
  )
}

export default HomePage