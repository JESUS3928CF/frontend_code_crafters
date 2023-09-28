import NavBar from "./components/NavBar"
import Card from "./components/Card"

//use of gpt chat to create some styles in this component
const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div>
          <div className="pl-20 flex flex-col bg-[#CBDCF7] h-64 justify-center">
            <div className="mb-3 w-1/4">
              <h1 className="text-3xl font-semibold">AQUÍ TE BRINDAMOS AYUDA</h1>
            </div>
            <div className="w-1/3 mb-5">
              <p>Como crees que podemos mejorar para evitar la desercion de las carreras STEM?</p>
            </div>
            <div>
              <input className="w-72 px-1 py-2 mr-5 rounded " type="text" />
              <button className="px-6 py-2 text-white bg-sky-600 hover:bg-sky-700 rounded-lg">
                Enviar
              </button>
            </div>
          </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Card/>
      </div>

    </div>
  )
}

export default HomePage