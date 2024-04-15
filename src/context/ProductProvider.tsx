import { ProductContext } from "./ProductContext"
import { ProductState, ProductProviderProps, Product } from '../types/product';
import ProductReducer from "./ProductReducer";
import { useReducer } from "react";
import { productAxios } from "../helpers/productAxios";

const ProductProvider = ( { children }: ProductProviderProps ) => {

    const initialState: ProductState = {
        products: [],
        product:null,
        isLoading: false,
    }

    const [ state, dispatch ] = useReducer( ProductReducer, initialState );

    const loadProducts = async () => {  
        dispatch({
            type: 'LOADING',
            payload: true
        });
        const products = await productAxios.getProducts();
        dispatch({ 
            type: 'LOAD_PRODUCTS', 
            payload: products 
        });
    }

    const deleteProduct = (product: Product) => {
        dispatch({ 
            type: 'DELETE_PRODUCT',
            payload: product 
        })
    }

    

  return (
    <ProductContext.Provider value={{
        products: state.products,
        product: state.product,
        isLoading: state.isLoading,
        loadProducts,
        deleteProduct
        
    }}>
        { children }
    </ProductContext.Provider>
  )
}

export default ProductProvider;
