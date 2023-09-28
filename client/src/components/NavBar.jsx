import { Link } from "react-router-dom"

// Using GPT Chat as a Design Aid
const NavBar = () => {
  return (
    //use of gpt chat to create some styles in this component
    <nav className="w-full p-5 flex justify-between items-center font-normal border-b-2 shadow-lg border-gray-300 border-">
      <div className="">
        <Link to='/' className="text-3xl font-bold">Logo</Link>
      </div>
      <ul className="flex justify-center space-x-5">
        <li>
          <Link to='/' className="pr-5 cursor-pointer hover:text-sky-600 transition-all ease-in">Inicio</Link>
        </li>
        <li>
          <Link to="/form-support" className="pr-5 cursor-pointer hover:text-sky-600 transition-all ease-in">Apoyos</Link>
        </li>
        <li>
          <Link to="/" className="pr-5 cursor-pointer hover:text-sky-600 transition-all ease-in">Acerca de Nosotros</Link>
        </li>
        <li>
          <Link to="/" className="pr-5 cursor-pointer hover:text-sky-600 transition-all ease-in">Ayuda</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar