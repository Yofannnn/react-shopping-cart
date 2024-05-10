import { useEffect,useState } from "react";
import ContainerCardCart from "../fragments/container-card-cart";
import ContainerTotalPrice from "../fragments/container-total-price";
import Navbar from "../fragments/navbar";

const shoppingCart = JSON.parse(localStorage.getItem('cart')) || []

export default function Cart() {
    let [cart, setCart] = useState(shoppingCart)
    const [dataProducts, setDataproducts] = useState([])

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
        })
    },[])

    function handleIncrementQuantity(currentItem) {
        const newItemCart = cart.map(item => {
            if (item.id === currentItem.id && item.size === currentItem.size) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        })
        setCart(() => {
            localStorage.setItem('cart', JSON.stringify(newItemCart))
            return newItemCart
        })
    }

    function handleDecrementQuantity(currentItem) {
        const newItemCart = cart.map(item => {
            if (item.id === currentItem.id && item.size === currentItem.size) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }).filter(item => item.quantity > 0)
        setCart(() => {
            localStorage.setItem('cart', JSON.stringify(newItemCart))
            return newItemCart
        })
    }

    function handleRemoveItem(currentItem) {
        const thisItem = cart.find(product => product.id === currentItem.id && product.size === currentItem.size)
        const newItemCart = cart.filter(item => item !== thisItem)
        setCart(() => {
            localStorage.setItem('cart', JSON.stringify(newItemCart))
            return newItemCart
        })
    }

    if (cart.length === 0) {
        return(
        <>
        <Navbar />
        <div className="container text-center position-absolute top-50 start-50 translate-middle"><h1>Your cart is empty</h1></div>
        </>
        )
    } else return (
        <>
        <Navbar />
        <ContainerCardCart cart={cart} dataProducts={dataProducts} onIncrementQuantity={handleIncrementQuantity} onDecrementQuantity={handleDecrementQuantity} onRemoveItem={handleRemoveItem} />
        <ContainerTotalPrice cart={cart} dataProducts={dataProducts} />
        </>
    )
}
