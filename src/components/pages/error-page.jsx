import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError()

    return(
        <>
        <div className="container text-center position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
            <h1 className="fw-bold">404</h1>
            <hr className="border border-black border-2 m-2" style={{height: "2.5rem"}} />
            <p className="fs-4 mt-2">{error.statusText || error.messege}</p>
        </div>
        </>
    )
}
