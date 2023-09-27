const NavBar = () => {
  return (
    // Using ChatGPT to query properties and style UIs 
    <nav className="w-full p-5 flex justify-between items-center font-normal border-b-2 border-gray-400 border-">
      <div className="">
        <h1 className="text-3xl font-bold">Logo</h1>
      </div>
      <ul className="flex justify-center space-x-5">
        <li>
          <a href="#" className="pr-5 cursor-pointer hover:text-sky-600 transition-all ease-in">Inicio</a>
        </li>
        <li>
          <a href="#" className="pr-5 cursor-pointer hover:text-sky-600 transition-all ease-in">Apoyos</a>
        </li>
        <li>
          <a href="#" className="pr-5 cursor-pointer hover:text-sky-600 transition-all ease-in">Acerca de Nosotros</a>
        </li>
        <li>
          <a href="#" className="pr-5 cursor-pointer hover:text-sky-600 transition-all ease-in">Ayuda</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar