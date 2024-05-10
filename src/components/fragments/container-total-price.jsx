/* eslint-disable react/prop-types */
import rupiah from "../func/formater";
export default function ContainerTotalPrice({cart, dataProducts}) {

    const calculateTotalPrice = cart.map(item => {
        const cartItem = dataProducts.find(product => product.id === item.id);
        if (cartItem) {
            return cartItem.price * item.quantity;
        } else return null;
    }).reduce((a, b) => a + b, 0)

    return(
        <>
        <div className="container-total-price">
            <p>total price all items: {rupiah.format(calculateTotalPrice)}</p>
        </div>
        </>
    )
}