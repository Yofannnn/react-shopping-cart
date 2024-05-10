import Navbar from "../fragments/navbar";

export default function About() {
    document.title = 'about page'
    return(
        <>
        <Navbar />
        <h1 className="text-center position-absolute top-50 start-50 translate-middle">about page</h1>
        </>
    )
}