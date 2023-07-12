import { GET_ALL_BRAND, GET_ERROR, CREATE_BRAND, GET_ONE_BRAND } from "../type";
// import baseUrl from "../../Api/baseURL";
import {useGetData} from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";

//get category to homePage
export const getAllBrand = ( limit ) => async ( dispatch ) => {

    try {
        const res = await useGetData( `api/v1/brands?limit=${limit}` );
        // console.log(res)
        dispatch( {
            type: GET_ALL_BRAND,
            payload: res
        } )
    }
    catch ( e ) {
        dispatch( {
            type: GET_ERROR,
            payload: "Error in Redux getAllBrand: " + e
        } )
    }
}

//get All category with pagination
export const getAllBrandPage = ( page ) => async ( dispatch ) => {

    try {
        const res = await useGetData( `api/v1/brands?limit=5&page=${page}` );
        // console.log(res)
        dispatch( {
            type: GET_ALL_BRAND,
            payload: res
        } )
    }
    catch ( e ) {
        dispatch( {
            type: GET_ERROR,
            payload: "Error in Redux getAllBrandPage: " + e
        } )
    }
}
//get oneBrand
export const getOneBrand = ( id ) => async ( dispatch ) => {

    try {
        const res = await useGetData( `api/v1/brands/${id}` );
        // console.log(res)
        dispatch( {
            type: GET_ONE_BRAND,
            payload: res
        } )
    }
    catch ( e ) {
        dispatch( {
            type: GET_ERROR,
            payload: "Error in Redux getAllBrand: " + e
        } )
    }
}

//Create category  with pagination
export const createBrand = ( fromData ) => async ( dispatch ) => {

    try {
        const res = await useInsertDataWithImage( `api/v1/brands`, fromData );
        // console.log(res)
        dispatch( {
            type: CREATE_BRAND,
            payload: res,
            loading: true
        } )
    }
    catch ( e ) {
        dispatch( {
            type: GET_ERROR,
            payload: "Error in Redux CreateBrand: " + e
        } )
    }
}