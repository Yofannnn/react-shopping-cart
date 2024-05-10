/* eslint-disable react/prop-types */
export default function StickyNavProducts({category, products, setSort, sort}) {
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            setSort(e.target.id)
        })
        item.id === sort ? item.classList.add('active') : item.classList.remove('active')
        item.id === sort ? item.style.cursor = 'not-allowed' : item.style.cursor = 'pointer'
    })

    return(
        <>
        <div className="d-flex justify-content-between align-items-center sticky-top bg-light sort-wrapped sticky-nav-products">
            <h5 className="mx-3 my-2">{`${category}(${products.length})`}</h5>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Sort By
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" id="default">Default</a></li>
                    <li><a className="dropdown-item" href="#" id="priceHiLo">Price: High-Low</a></li>
                    <li><a className="dropdown-item" href="#" id="priceLoHi">Price: Low-High</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}
