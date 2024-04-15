import { useProductContext } from "../hooks/useProductContext"
import Product from "./Product";
import Spinner from "./Spinner";

const ProductList = () => {

  const { products, isLoading } = useProductContext();

  return (
    <>
      <div className="container d-flex flex-wrap justify-content-around ">
        {
          isLoading 
            ? <Spinner/>
            :(
              products.map( product => (
                <Product product={ product } key={ product.id }/>
              ))
            )
        }
      </div>
    </>
  )
}

export default ProductList
