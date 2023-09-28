import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

//use of gpt chat to create some styles in this component
const FormSupport = () => {
    const [institutions, setInstitutions] = useState([]);
    const [typeInstitutions, setTypeInstitutions] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedInstitutionId, setSelectedInstitutionId] = useState(0);
    const [selectedTypeInstitutionId, setSelectedTypeInstitutionId] =
        useState(0);

    useEffect(() => {
        const fetchInstitutions = async () => {
            const response = await axios.get(
                'http://localhost:8000/api/v1/educational_institutions/search/?keyword=' +
                    searchQuery
            );
            const data = response.data;

            console.log('datos ' + data);
            setInstitutions(data);
        };

        fetchInstitutions();
    }, [searchQuery]);

    useEffect(() => {
        const fetchTypeInstitutions = async () => {
            const response = await axios.get(
                'http://localhost:8000/api/v1/typeinstitutes/'
            );
            const data = response.data;

            setTypeInstitutions(data);
        };

        fetchTypeInstitutions();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Imprime por consola el id de la primera institución consultada.
        console.log(
            'ID de la primera institución consultada:',
            institutions[0].id
        );

        // Imprime por consola el id del tipo de soporte seleccionado.
        console.log(
            'ID del tipo de soporte seleccionado:',
            selectedTypeInstitutionId
        );
    };

    return (
        <>
            <NavBar />
            <h3 className='text-center text-3xl font-bold mt-5'>
                Buscar Apoyos
            </h3>
            <div className='flex justify-center items-center mt-10'>
                <form
                    className='bg-white py-10 px-5 md:w-1/3 rounded-xl shadow-xl border border-gray-600'
                    onSubmit={handleSubmit}
                >
                    <h3 className='text-center mb-3 text-xl font-bold'>
                        Te ayudaremos a buscar el apoyo que necesitas
                    </h3>

                    <div className='flex flex-col gap-y-5'>
                        <label
                            htmlFor='nombre'
                            className='text-gray-700 font-semibold text-base'
                        >
                            ¿A qué institución perteneces?
                        </label>
                        <input
                            type='text'
                            placeholder='Escribe aquí ...'
                            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg mb-1 focus:outline-none focus:border-sky-700 focus:ring-sky-700'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />

                        <p> Instituciones :</p>
                        <ul className='list-disc mt-2 pl-5'>
                            {institutions.map((institution) => (
                                <li key={institution.id}>{institution.name}</li>
                            ))}
                        </ul>

                        <label
                            htmlFor='nombre'
                            className='text-gray-700 font-semibold text-base'
                        >
                            Tipo de apoyo
                        </label>
                        <select
                            name='typeInstituteId'
                            id='typeInstituteId'
                            onChange={(e) =>
                                setSelectedTypeInstitutionId(e.target.value)
                            }
                        >
                            {typeInstitutions.map((typeInstitution) => (
                                <option
                                    key={typeInstitution.id}
                                    value={typeInstitution.id}
                                >
                                    {typeInstitution.name}
                                </option>
                            ))}
                        </select>

                        <input
                            type='submit'
                            value='Buscar apoyo'
                            className='bg-sky-600 p-3 mt-5 w-1/2 mx-auto block font-bold text-white rounded-xl cursor-pointer hover:bg-sky-700 transition-colors text-lg'
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default FormSupport;
