import { useProductContext } from "../hooks/useProductContext";
import { Product as ProductI } from "../types/product"

const Product = ({ product }: { product: ProductI }) => {

  const { deleteProduct } = useProductContext();
  const { title, price, description, category, image } = product;

  return (
    <>
      <div className="card mb-3 shadow p-4" style={{maxWidth: "540px"}}>
        <div className="row g-0">
          <div className="col-md-4 d-flex justify-content-center align-items-center" >
            <img src={ image } className="img-fluid rounded-start" alt="..." style={{width: "200px"}}/>
          </div>
          <div className="col-md-8">
            <div className="card-body ">
              <h5 className="card-title">{ title }</h5>
              <p className="card-text text-truncate">{ description }</p>
              <p className="card-text"><small className="text-body-secondary">{ category }</small></p>
              <p className="card-text"><small className="text-success">$ { price }</small></p>
              <button className="btn btn-danger " onClick={ () => deleteProduct(product) }>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product;
