const NavBar = () => {
  return (
    // Using ChatGPT to query properties and style UIs 
    <div className="w-full p-5 flex justify-between items-center font-normal border-b-2 border-gray-400 border-">
      <div className="">
        <h1>Logo</h1>
      </div>
      <div className="flex justify-center">
        <button className="pr-20">
          Inicio
        </button>
        <button className="pr-20">
          Apoyos
        </button>
        <button className="pr-20">
          Acerca de Nosotros
        </button>
        <button className="pr-20">
          Ayuda
        </button>
      </div>
    </div>
    
  )
}

export default NavBar