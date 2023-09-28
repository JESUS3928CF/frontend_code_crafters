import { Link } from "react-router-dom"

//use of gpt chat to create some styles in this component
const CardSupport = () => {
    return (
        <div className="p-6 bg-[#CBDCF7] rounded-xl w-full overflow-hidden hover:shadow-xl">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Apoyo en general
            </h5>
            <p className="mb-3 font-normal text-gray-700">
                Here are the biggest enterprise technology acquisitions of 2021 so far,
                in reverse chronological order.
            </p>
            <Link
                to={'/form-support'}
                className="inline-flex items-center px-3 py-2 text-base font-medium text-center text-black bg-white rounded-lg hover:bg-gray"
            >
                ver más
                <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
            </Link>
        </div>
    )
}

export default CardSupport
