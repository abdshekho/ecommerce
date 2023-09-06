import { GET_ERROR, GET_ALL_PRODUCTS, GET_ONE_PRODUCT, CREATE_PRODUCTS, GET_PRODUCT_LIKE, DELETE_PRODUT, UPDATE_PRODUCTS, GET_ALL_PRODUCTS_CATEGORY, GET_ALL_PRODUCTS_BRAND } from "../type";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import { useGetData } from "../../hooks/useGetData";
import useDeleteData from "../../hooks/useDeleteData";
import { useInUpdateDataWithImage } from "../../hooks/useUpdateDateWithImage";

//create Products
export const createProduct = ( fromData ) => async ( dispatch ) => {

    try {
        const res = await useInsertDataWithImage( `api/v1/products`, fromData );
        // console.log(res)
        dispatch( {
            type: CREATE_PRODUCTS,
            payload: res,
            loading: true
        } )
    }
    catch ( e ) {
        dispatch( {
            type: GET_ERROR,
            payload: "Error in Redux createProduct: " + e
        } )
    }
}

//get category to homePage
export const getAllProducts = ( limit ) => async ( dispatch ) => {

    try {
        const res = await useGetData( `api/v1/products?limit=${limit}&fields=_id,title,description,price,imageCover,ratingsAverage` );
        // console.log(res)
        dispatch( {
            type: GET_ALL_PRODUCTS,
            payload: res,
            loading: true
        } )
    }
    catch ( e ) {
        dispatch( {
            type: GET_ERROR,
            payload: "Error in Redux getAllProducts : " + e
        } )
    }
}

//get category to homePage
export const getOneProduct = ( id ) => async ( dispatch ) => {

    try {
        const res = await useGetData( `api/v1/products/${id}` );
        // console.log(res)
        dispatch( {
            type: GET_ONE_PRODUCT,
            payload: res,
            loading: true
        } )
    }
    catch ( e ) {
        dispatch( {
            type: GET_ERROR,
            payload: "Error in Redux getOneProduct : " + e
        } )
    }
}

//get category to homePage
export const getProductLike = ( id ) => async ( dispatch ) => {

    try {
        const res = await useGetData( `api/v1/products?category=${id}` );
        // console.log(res)
        dispatch( {
            type: GET_PRODUCT_LIKE,
            payload: res,
            loading: true
        } )
    }
    catch ( e ) {
        dispatch( {
            type: GET_ERROR,
            payload: "Error in Redux getProductLike : " + e
        } )
    }
}
//get category to homePage
export const deleteProducts = ( id ) => async ( dispatch ) => {

    try {
        const res = await useDeleteData( `api/v1/products/${id}` );
        // console.log(res)
        dispatch( {
            type: DELETE_PRODUT,
            payload: res,
            loading: true
        } )
    }
    catch ( e ) {
        dispatch( {
            type: GET_ERROR,
            payload: "Error in Redux deleteProducts : " + e
        } )
    }
}


//get products with paginatoin with pages number
export const getAllProductsPage = ( page, limit ) => async ( dispatch ) => {

    try {
        const res = await useGetData( `api/v1/products?page=${page}&limit=${limit}` );
        // console.log(res)
        dispatch( {
            type: GET_ALL_PRODUCTS,
            payload: res,
            loading: true
        } )
    }
    catch ( e ) {
        dispatch( {
            type: GET_ERROR,
            payload: "Error in Redux getAllProducts : " + e
        } )
    }
}

//update Product with id
export const updateProduct = ( id, data ) => async ( dispatch ) => {

    try {
        const res = await useInUpdateDataWithImage( `api/v1/products/${id}`, data );
        // console.log(res)
        dispatch( {
            type: UPDATE_PRODUCTS,
            payload: res,
            loading: true
        } )
    }
    catch ( e ) {
        dispatch( {
            type: GET_ERROR,
            payload: "Error in Redux updateProduct : " + e
        } )
    }
}


//get all products with query string
export const getAllProductsSearch = ( queryString ) => async ( dispatch ) => {

    try {
        const res = await useGetData( `api/v1/products?${queryString}` );
        // console.log(res)
        dispatch( {
            type: GET_ALL_PRODUCTS,
            payload: res,
            loading: true
        } )
    }
    catch ( e ) {
        dispatch( {
            type: GET_ERROR,
            payload: "Error in Redux getAllProducts : " + e
        } )
    }
}

//get all products by category
export const getAllProductsByCategory = ( page, limit, categoryID ) => async ( dispatch ) => {
    try {
        const response = await useGetData( `/api/v1/products?limit=${limit}&category=${categoryID}&page=${page}` );
        dispatch( {
            type: GET_ALL_PRODUCTS_CATEGORY,
            payload: response,
            loading: true
        } )

    } catch ( e ) {
        dispatch( {
            type: GET_ALL_PRODUCTS_CATEGORY,
            payload: e.response,
        } )
    }
}

//get all products by brand
export const getAllProductsByBrand = ( page, limit, brandID ) => async ( dispatch ) => {
    try {
        const response = await useGetData( `/api/v1/products?limit=${limit}&brand=${brandID}&page=${page}` );
        dispatch( {
            type: GET_ALL_PRODUCTS_BRAND,
            payload: response,
            loading: true
        } )

    } catch ( e ) {
        dispatch( {
            type: GET_ALL_PRODUCTS_BRAND,
            payload: e.response,
        } )
    }
}