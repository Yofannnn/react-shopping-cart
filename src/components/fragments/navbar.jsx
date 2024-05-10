import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import rupiah from "../func/formater"
import '../../assets/card-products.css'
import '../../assets/navbar.css'

export default function Navbar() {
    const cartCount = JSON.parse(localStorage.getItem('cart')) || []
    const bedgeCount = cartCount.length !== 0 ? cartCount.map(item => item.quantity).reduce((a, b) => a + b, 0) : cartCount
    const [dataproducts, setDataproducts] = useState([])
    const [searchInputValue, setSearchInputValue] = useState('')
    const searchTheProducts = dataproducts.map(product => {
        if (!searchInputValue){
            return
        } else if (product.title.toLowerCase().includes(searchInputValue.toLowerCase()) || product.title.toLowerCase().replace(/\s+/gi, '').includes(searchInputValue.toLowerCase().replace(/\s+/gi, '')) || product.title.toLowerCase().replace(/[.]/gi, '').includes(searchInputValue.toLowerCase().replace(/[.]/gi, '')) ) {
            return product
        }
    }).filter(product => product !== undefined)
    const {category} = useParams()

    useEffect(() => {
        fetch('./products.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then(response => {
            if (response.Response === 'False') {
                throw new Error(response.Error)
            }
            setDataproducts(response.products)
        })
    }, [])

    return(
        <>
        <nav>
            <div className="ms-5 logo">
                <a href="/">
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="50" height="50">
                        <g id="SVGRepo_bgCarrier" ></g>
                        <path className="a" d="M13.9871,29.8559c-.5827.2416-1.18.4464-1.7836.6305a19.2488,19.2488,0,0,1-2.39.5714,8.7143,8.7143,0,0,1-1.9717.1448,5.2621,5.2621,0,0,1-2.1139-.5681,4.1281,4.1281,0,0,1-1.96-2.1123,5.1361,5.1361,0,0,1-.11-2.9227,11.8479,11.8479,0,0,1,1.85-4.0986c.5727-.8469,1.2181-1.642,1.8719-2.428q.96-1.1543,1.9466-2.2862a12.4866,12.4866,0,0,0-1.0551,2.2024,8.4194,8.4194,0,0,0-.476,1.9091,4.3,4.3,0,0,0,.262,2.1957,3.5242,3.5242,0,0,0,1.9552,1.8407,5.0891,5.0891,0,0,0,1.8939.3019A14.0442,14.0442,0,0,0,14.88,24.795c1.09-.25,2.1745-.5251,3.2538-.8187C24.7215,22.1838,44.5,16.8589,44.5,16.8589S21.6463,26.68,13.9871,29.8559Z"></path>
                    </svg>
                </a>
            </div>
            <div className="wrapper-link-navbar">
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink></li>
                    <li><NavLink to="/shoes" className={() => location.pathname.startsWith("/shoes") || location.pathname.startsWith("/lifestyle") || location.pathname.startsWith("/football") || location.pathname.startsWith("/running") || location.pathname.startsWith("/basketball") ? "nav-link active" : "nav-link"}>Products</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink></li>
                </ul>
                <button type="button" id="buttonSearchModal" className="btn border border-0 p-2 rounded-pill" data-bs-toggle="modal" data-bs-target="#searchModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                </button>
                <ul>
                <div className="account">
                    <a href="/account" className="nav-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg>
                    </a>
                </div>
                <div className="cart">
                    <a href="/cart" className="nav-link">
                        <div className="position-relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                            </svg>
                            <span className={bedgeCount !== 0 ? "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" : ""}>
                            {bedgeCount}
                            </span>
                        </div>
                    </a>
                </div>
                </ul>
            </div>
        </nav>
        {/* modal */}
        <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="searchModal" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5">Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <input type="text" className="input-group-text w-100" id="searchInput" placeholder="Search Nike" value={searchInputValue} onChange={e => setSearchInputValue(e.target.value)} />
                    <div className="container-result-search d-grid" style={searchTheProducts.length !== 0 ? {gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 30%), 1fr))"} : {gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 100%), 1fr))"}} >
                        {
                            searchTheProducts.length !== 0 ?
                            searchTheProducts.map(product => (
                                <a href={`/${category !== undefined ? category : "shoes"}/${product.id}`} key={product.id} className="card p-2 text-decoration-none card-product">
                                    <div className="rounded wrapped-img">
                                        <img loading="lazy" src={`./img-products/${product.image}`} className="card-img-top" alt={product.image} />
                                    </div>
                                    <div className="card-body p-0 my-2">
                                        <h6 className="card-title m-0">{product.title}</h6>
                                        <p className="text-secondary m-0 mt-1">{product.type}</p>
                                        <p className="card-text m-0 mt-2">{rupiah.format(product.price)}</p>
                                    </div>
                                </a>
                            )) :
                            searchInputValue !== "" ?
                            <p className="text-center p-3 mt-3">No result</p> : ""
                        }
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
