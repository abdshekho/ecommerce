import { GET_ERROR, CREATE_PRODUCTS, GET_ALL_PRODUCTS, GET_ONE_PRODUCT, GET_PRODUCT_LIKE, DELETE_PRODUT, UPDATE_PRODUCTS, GET_ALL_PRODUCTS_CATEGORY, GET_ALL_PRODUCTS_BRAND } from "../type"

const initail = {
    prodcuts: [],
    allproducts: [],
    oneProudct: [],
    productLike: [],
    deleteProducts: [],
    updateProducts: [],
    allProductCat: [],
    allProductBrand: [],
    loading: true,
}
//loading : true => it is meaning not finish
//loading : false => it is meaning  finished

const productsRducer = ( state = initail, action ) => {
    switch ( action.type ) {
        case CREATE_PRODUCTS:
            return {
                ...state,
                prodcuts: action.payload,
                loading: false
            }
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allproducts: action.payload,
                loading: false
            }
        case GET_ONE_PRODUCT:
            return {
                oneProudct: action.payload,
                loading: false
            }
        case GET_PRODUCT_LIKE:
            return {
                ...state,
                productLike: action.payload,
                loading: false
            }
        case DELETE_PRODUT:
            return {
                ...state,
                deleteProducts: action.payload,
                loading: false
            }
        case UPDATE_PRODUCTS:
            return {
                ...state,
                updateProducts: action.payload,
                loading: false,
            }
        case GET_ALL_PRODUCTS_CATEGORY:
            return {
                loading: true,
                allProductCat: action.payload,
            }
        case GET_ALL_PRODUCTS_BRAND:
            return {
                loading: true,
                allProductBrand: action.payload,
            }
        case GET_ERROR:
            return {
                prodcuts: action.payload,
                loading: true
            }
        default:
            return state;
    }
}

export default productsRducer