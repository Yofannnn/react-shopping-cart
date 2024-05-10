/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import rupiah from "../func/formater";
import '../../assets/card-products.css'

export default function ContainerCardProducts({category, products}) {

    return(
        <>
        <div className="col-10 container-products">
            {products.map(product => (
                <NavLink to={`/${category}/${product.id}`} key={product.id} className="card p-2 text-decoration-none card-product">
                  <div className="rounded wrapped-img">
                    <img loading="lazy" src={`./img-products/${product.image}`} className="card-img-top" alt={product.image} />
                  </div>
                    <div className="card-body p-0 my-2">
                      <h6 className="card-title m-0">{product.title}</h6>
                      <p className="text-secondary m-0 mt-1">{product.type}</p>
                      <p className="card-text m-0 mt-2">{rupiah.format(product.price)}</p>
                    </div>
                </NavLink>
            ))}
        </div>
        </>
    )
}
