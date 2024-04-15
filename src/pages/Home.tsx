import ProductList from "../components/ProductList"
import { useProductContext } from "../hooks/useProductContext"

const Home = () => {
    const { loadProducts, products } = useProductContext();
  return (
    <main className="vh-100">
        <h1 className='text-center my-2'>Fake Store API</h1>
        {
            products.length === 0 && (
                <div className="d-flex">
                    <button className="btn btn-outline-primary m-auto" onClick={ loadProducts }>Get Products</button>
                </div>
            )
        }
        <ProductList/>
    </main>
  )
}

export default Home
