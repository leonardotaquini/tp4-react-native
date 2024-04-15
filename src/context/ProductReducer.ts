import { ProductActions, ProductState } from "../types/product"

const ProductReducer = (state: ProductState, action: ProductActions): ProductState => {
    
    const { type, payload } = action;

    switch ( type ) {

      case 'LOAD_PRODUCTS':
        return {
          ...state,
          products: payload,
          isLoading: false
        }

       case 'DELETE_PRODUCT':
        return {
          ...state,
          products: state.products.filter(product => product.id !== payload.id)
        }
        case 'LOADING':
          return {
            ...state,
            isLoading: payload
          }

      default:
        return state
    }
}

export default ProductReducer
