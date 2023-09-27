import NavBar from "../components/NavBar"

const SpecificSupport = () => {
  return (
    <div>
        <NavBar/>
        <div className="flex flex-col h-screen justify-center items-center">
            <h1 className="font-bold text-2xl mb-5">Apoyo de Sostenimiento Regular</h1>
            <div className="flex flex-col justify-center border-2 border-black rounded-lg p-10">
                <div className="flex justify-center pb-8">
                    <div className="w-64 text-center">
                        <h2 className="font-semibold m-2">Descripción</h2>
                        <div className="flex">
                            <p>Is simply dummy text of the printing and typesetting industry. Lorem industry's standard</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="w-64 text-center p-5">
                        <h2 className="font-semibold mb-2">Tipo de Apoyo</h2>
                        <div>
                            <p>Is simply dummy text of the printing and typesetting industry. Lorem industry's standard</p>
                        </div>
                    </div>
                    <div className="w-64 text-center p-5">
                        <h2 className="font-semibold mb-2">Requisitos</h2>
                        <div>
                            <p>Is simply dummy text of the printing and typesetting industry. Lorem industry's standard</p>
                        </div>
                    </div>
                    <div className="w-64 text-center p-5">
                        <h2 className="font-semibold mb-2">¿Cómo accerder a ellos?</h2>
                        <div>
                            <p>Is simply dummy text of the printing and typesetting industry. Lorem industry's standard</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecificSupport