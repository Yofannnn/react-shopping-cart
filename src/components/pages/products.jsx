import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../fragments/navbar";
import NavMenuProducts from "../fragments/nav-menu-products";
import ContainerCardProducts from "../fragments/container-card-products";
import StickyNavProducts from "../fragments/sticky-nav-products";
import Footer from "../fragments/footer";

export default function Products() {
    const {category} = useParams()

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
    
    const filterCategory = category !== 'shoes' ? dataProducts.filter(product => product.category === category) : dataProducts

    const [products, setProducts] = useState(filterCategory)

    const [sort, setSort] = useState('default')

    document.title = category

    // useEffect(() => {
    //     if (sort === 'priceLoHi') {
    //         setProducts([...filterCategory].sort((a, b) => a.price - b.price))
    //     } else if (sort === 'priceHiLo') {
    //         setProducts([...filterCategory].sort((a, b) => b.price - a.price))
    //     } else {
    //         setProducts(filterCategory)
    //     }
    // }, [sort, filterCategory])

    useEffect(() => {
        // Filter products based on the category
        const filteredProducts = category !== 'shoes' ? dataProducts.filter(product => product.category === category) : dataProducts;
    
        // Sort filtered products based on the selected sort criteria
        let sortedProducts = [...filteredProducts];
        if (sort === 'priceLoHi') {
            sortedProducts.sort((a, b) => a.price - b.price); // Sort low to high
        } else if (sort === 'priceHiLo') {
            sortedProducts.sort((a, b) => b.price - a.price); // Sort high to low
        }
    
        // Update the products state
        setProducts(sortedProducts);
    }, [category, sort, dataProducts]);       
    
    if (error) return <div className="container text-center position-absolute top-50 start-50 translate-middle"><h1>Error: {error}</h1></div>
    if (filterCategory.length === 0) return <div className="container text-center position-absolute top-50 start-50 translate-middle"><h1>404</h1><h5>{category} not found</h5></div>

    return(
        <>
        <Navbar />
        <div>
            <StickyNavProducts category={category} products={products} setSort={setSort} sort={sort} />
            <div className="row wrapped-products-content">
                <NavMenuProducts />
                <ContainerCardProducts category={category} products={products} />
            </div>
        </div>
        <Footer />
        </>
    )
}
