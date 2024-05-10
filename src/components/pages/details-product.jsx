import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import rupiah from "../func/formater";
import Navbar from "../fragments/navbar";
import '../../assets/detail-product.css'

export default function DetailsProductPage() {
    const {id} = useParams()

    const [dataProducts, setDataproducts] = useState([]) //data from products.json
    const [error, setError] = useState(null) //messege error

    useEffect(() => {
        fetch('../products.json',
        {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
        }
        )
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
        }).catch(error => {
            setError(error.message);
        });
    },[])

    const detailProduct = dataProducts.find(product => product.id === id)

    // eslint-disable-next-line no-unused-vars
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

    const [size, setSize] = useState(undefined)

    function handleAddToCart(idProduct) {
      setCart(prevCart => {
        const productInCartIndex = prevCart.findIndex(product => product.id === idProduct && product.size === size);
    
        if (productInCartIndex === -1) {
          if (size === undefined) return prevCart  //should i return cart or prevCart here?
          const updatedCart = [
            ...prevCart,
            {
              id: idProduct,
              size,
              quantity: 1,
            }
          ]
          localStorage.setItem('cart', JSON.stringify(updatedCart))
          return updatedCart
        } else {
          const updatedCart = prevCart.map((product, index) => index === productInCartIndex ? {...product, quantity: product.quantity + 1} : product)
          localStorage.setItem('cart', JSON.stringify(updatedCart))
          return updatedCart
        }
      })
    }

    const titlePage = dataProducts.filter(product => product.id === id)
    document.title = titlePage.map(product => product.title)

    if (error) return <div className="container text-center position-absolute top-50 start-50 translate-middle"><h1>Error: {error}</h1></div>
    if (!detailProduct) return <div className="container text-center position-absolute top-50 start-50 translate-middle"><h1>404</h1><h5>{id} not found</h5></div>
    return(
        <>
        <Navbar />
        {detailProduct && (
            <div className="mt-5 container-detail-product">
                <div className="column-left">
                  <div className="wrapped-img">
                    <img src={`../img-products/${detailProduct.image}`} alt="product-img" />
                  </div>
                </div>
                <div className="column-right">
                  <div className="wrapped-column-right">
                    <p className="mb-0">{detailProduct.type}</p>
                    <h1 className="mb-2">{detailProduct.title}</h1>
                    <h3 className="mb-4">{rupiah.format(detailProduct.price)}</h3>
                    <div className="d-flex justify-content-between align-items-center mb-1 label-size">
                      <span>Select Size</span>
                      <span><a href="/size-guide" className="text-secondary text-decoration-none">Size Guide</a></span>
                    </div>
                    <div className="mb-4 wrapped-size">
                      <input type="radio" className="btn-check" name="options-outlined" id="39" onClick={() => setSize(39)} />
                      <label className="btn btn-outline-dark input-size" htmlFor="39">EU 39</label>

                      <input type="radio" className="btn-check" name="options-outlined" id="40" onClick={() => setSize(40)} />
                      <label className="btn btn-outline-dark input-size" htmlFor="40">EU 40</label>

                      <input type="radio" className="btn-check" name="options-outlined" id="41" onClick={() => setSize(41)} />
                      <label className="btn btn-outline-dark input-size" htmlFor="41">EU 41</label>

                      <input type="radio" className="btn-check" name="options-outlined" id="42" onClick={() => setSize(42)} />
                      <label className="btn btn-outline-dark input-size" htmlFor="42">EU 42</label>

                      <input type="radio" className="btn-check" name="options-outlined" id="43" onClick={() => setSize(43)} />
                      <label className="btn btn-outline-dark input-size" htmlFor="43">EU 43</label>

                      <input type="radio" className="btn-check" name="options-outlined" id="44" onClick={() => setSize(44)} />
                      <label className="btn btn-outline-dark input-size" htmlFor="44">EU 44</label>

                      <input type="radio" className="btn-check" name="options-outlined" id="45" onClick={() => setSize(45)} />
                      <label className="btn btn-outline-dark input-size" htmlFor="45">EU 45</label>
                    </div>
                    <div className="d-grid col-12 mx-auto m-2">
                      <a href="" className="btn btn-dark border-dark py-3 rounded-pill co-btn">Check out</a>
                    </div>
                    <div className="d-grid col-12 mx-auto m-2">
                      <button type="button" className="btn btn-outline-dark border-dark py-3 rounded-pill" onClick={() => handleAddToCart(detailProduct.id)}>Add to Cart</button>
                    </div>
                    <p className="my-4">{detailProduct.description}</p>
                  </div>
                </div>
            </div>
        )}
        </>
    )
}
