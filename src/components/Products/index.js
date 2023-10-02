// Write your JS code here
import Header from '../Header'
import './index.css'

const Products=()=>{
    return (
        <>
          <Header/>
          <div className="products-container">
            <img className="products-image" src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png" alt="products"/>
          </div>
        </>
    )
}

export default Products