import { NavLink } from "react-router-dom"

export default function NavMenuProducts() {
    return(
        <>
        <div className="col-2 menu-products">
            <div className="p-2 category-navigation">
                <div className="wrapped-group">
                    <div className="group">
                        <NavLink to="/shoes">All Shoes</NavLink>
                        <NavLink to="/lifestyle">Lifestyle</NavLink>
                        <NavLink to="/football">Football</NavLink>
                        <NavLink to="/running">Running</NavLink>
                        <NavLink to="/basketball">Basket</NavLink>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
