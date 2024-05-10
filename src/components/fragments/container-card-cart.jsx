/* eslint-disable react/prop-types */
import rupiah from "../func/formater";
export default function ContainerCardCart({cart, dataProducts, onIncrementQuantity, onDecrementQuantity, onRemoveItem}) {
  
    return(
        <>
        <div className="container d-flex flex-wrap">
            {cart.map(item => {
                const cartItem = dataProducts.find(product => product.id === item.id);
                if (cartItem) {
                    return (
                        <div key={`${item.id}${item.size}`} className="card mb-3" style={{maxWidth: "540px"}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={`./img-products/${cartItem.image}`} className="img-fluid rounded-start" alt="img product" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{cartItem.title}</h5>
                                        <p className="card-text"><small className="text-body-secondary">price:{rupiah.format(cartItem.price)}</small></p>
                                        <p className="card-text">Total price: {rupiah.format(cartItem.price * item.quantity)}</p>
                                        <p className="card-text">Size: {item.size}</p>
                                        <div className="d-flex align-items-center counter-items">
                                            <button className="btn btn-outline-dark d-flex p-2 rounded-pill" onClick={() => onDecrementQuantity(item)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                                                </svg>
                                            </button>
                                            <span className=" p-2 m-2">{item.quantity}</span>
                                            <button className="btn btn-outline-dark d-flex p-2 rounded-pill" onClick={() => onIncrementQuantity(item)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="remove-item">
                                            <button className="btn d-flex p-2 rounded-pill" onClick={() => onRemoveItem(item)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                } else return null;
            })}
        </div>
        </>
    )
}

// //the problem is shoukd refresh page when the cart page have a change
// import { useState, useEffect } from 'react';
// import rupiah from "../func/formater";

// export default function ContainerCardCart({ dataProducts, onIncrementQuantity, onDecrementQuantity, onRemoveItem }) {
//     const [cart, setCart] = useState([]);

//     useEffect(() => {
//         const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//         setCart(storedCart);

//         const storageListener = () => {
//             const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
//             setCart(updatedCart);
//         };

//         window.addEventListener('storage', storageListener);

//         return () => {
//             window.removeEventListener('storage', storageListener);
//         };
//     }, [])

//     return (
//         <>
//             <div className="container d-flex flex-wrap">
//                 {cart.map(item => {
//                     const cartItem = dataProducts.find(product => product.id === item.id);
//                     if (cartItem) {
//                         return (
//                             <div key={cartItem.id} className="card mb-3" style={{ maxWidth: "540px" }}>
//                                 <div className="row g-0">
//                                     <div className="col-md-4">
//                                         <img src={`./img-products/${cartItem.image}`} className="img-fluid rounded-start" alt="img product" />
//                                     </div>
//                                     <div className="col-md-8">
//                                         <div className="card-body">
//                                             <h5 className="card-title">{cartItem.title}</h5>
//                                             <p className="card-text"><small className="text-body-secondary">price:{rupiah.format(cartItem.price)}</small></p>
//                                             <p className="card-text">Total price: {rupiah.format(cartItem.price * item.quantity)}</p>
//                                             <div className="d-flex align-items-center counter-items">
//                                                 <button className="btn btn-outline-dark d-flex p-2 rounded-pill" onClick={() => onDecrementQuantity(item)}>
//                                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
//                                                         <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
//                                                     </svg>
//                                                 </button>
//                                                 <span className=" p-2 m-2">{item.quantity}</span>
//                                                 <button className="btn btn-outline-dark d-flex p-2 rounded-pill" onClick={() => onIncrementQuantity(item)}>
//                                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
//                                                         <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
//                                                     </svg>
//                                                 </button>
//                                             </div>
//                                             <div className="remove-item">
//                                                 <button className="btn d-flex p-2 rounded-pill" onClick={() => onRemoveItem(item)}>
//                                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
//                                                         <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
//                                                     </svg>
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     } else return null;
//                 })}
//             </div>
//         </>
//     );
// }
