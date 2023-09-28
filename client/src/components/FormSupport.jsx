import React from 'react'
import NavBar from './NavBar'

//use of gpt chat to create some styles in this component
const FormSupport = () => {
    return (
        <>
            <NavBar />
            <h3 className='text-center text-3xl font-bold mt-5'>Buscar Apoyos</h3>
            <div className='flex justify-center items-center mt-10'>
                <form className='bg-white py-10 px-5 md:w-1/3 rounded-xl shadow-xl border border-gray-600'>
                    <h3 className='text-center mb-3 text-xl font-bold'>Te ayudaremos a buscar el apoyo que nesecitas</h3>
                    <label htmlFor="nombre" className="text-gray-700 font-semibold text-base">¿A qué institución perteneces?</label>
                    <input type="text"
                        placeholder='Escribe aquí ...'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg mb-3 focus:outline-none focus:border-sky-700 focus:ring-sky-700' />
                    <label htmlFor="nombre" className="text-gray-700 font-semibold text-base focus:outline-none focus:border-sky-700 focus:ring-sky-700">¿Que apoyo necesitas?</label>
                    <select className='border-2 w-full p-2 my-2 placeholder-gray-400 rounded-lg' name="" id="">
                        <option> Selecciona ... </option>
                        <option> op 1 </option>
                        <option> op 2 </option>
                        <option> op 3 </option>
                    </select>
                    <input
                        type="submit"
                        value='Buscar apoyo'
                        className="bg-sky-600 p-3 mt-5 w-1/2 mx-auto block font-bold text-white rounded-xl cursor-pointer hover:bg-sky-700 transition-colors text-lg" />
                </form>
            </div>
        </>
    )
}

export default FormSupport
