import NavBar from "./components/NavBar"
import Card from "./components/Card"
import { useForm } from "react-hook-form"
import { createRecommendation } from "./api/stem.api.js"
import toast from "react-hot-toast"

//use of gpt chat to create some styles in this component
const HomePage = () => {

  const { register, handleSubmit, formState: {
    errors
  } } = useForm()
  // register: capture the contents of the inputs
  // handleSubmit: for the event of form submission

  // create new recommendation
  //use of IA bard to add the date automatically to the object
  const onSubmit = handleSubmit(async (data) => {
    try {
      data.date = new Date().toISOString().split("T")[0];
      const res = await createRecommendation(data);
      toast.success('Recomendacion enviada gracias por comentar.'
       ) // Alerta success
    } catch (error) {
      console.log(error);
    }
  });

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
            <form onSubmit={onSubmit}>
              <input className="w-72 px-1 py-2 mr-5 rounded " 
              type="text"
              placeholder="Escribe algo ..."
                //  Implementation of the useForm
                {...register("description", { required: true })} />
              
              <button className="px-6 py-2 text-white bg-sky-600 hover:bg-sky-700 rounded-lg">
                Enviar
              </button>
            </form>
            {errors.description && <span className="text-lg text-red-600 font-semibold mt-3">Este campo es requerido</span>}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Card />
      </div>

    </div>
  )
}

export default HomePage