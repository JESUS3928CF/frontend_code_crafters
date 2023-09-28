import CardSupport from "../components/CardSupport"
import NavBar from "../components/NavBar"

////use of gpt chat to create some styles in this component
const GeneralSupport = () => {
    return (
        <>
            <NavBar />
            <div className="grid grid-cols-3 gap-4 p-5 m-5">
                <CardSupport />
                <CardSupport />
                <CardSupport />
                <CardSupport />
                <CardSupport />
                <CardSupport />
                <CardSupport />

            </div>
        </>
    )
}

export default GeneralSupport
