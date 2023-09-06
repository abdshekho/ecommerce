import { GET_ALL_CATEGORY, GET_ERROR, CREATE_CATEGORY, GET_ONE_CATEGORY, GET_ALL_CATEGORY_ToNav } from "../type";
// import baseUrl from "../../Api/baseURL";
import { useGetData } from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";

//get category to homePage
export const getAllCategory = ( limit ) => async ( dispatch ) => {

    try {
        const res = await useGetData( `api/v1/categories?limit=${limit}` );
        // console.log(res)
        dispatch( {
            type: GET_ALL_CATEGORY,
            payload: res
        } )
    }
    catch ( e ) {
        dispatch( {
            type: GET_ERROR,
            payload: "Error in Redux getAllCategory : " + e
        } )
    }
}
export const getAllCategoryToNav = ( limit ) => async ( dispatch ) => {

    try {
        const res = await useGetData( `api/v1/categories?limit=${limit}` );
        // console.log(res)
        dispatch( {
            type: GET_ALL_CATEGORY_ToNav,
            payload: res
        } )
    }
    catch ( e ) {
        dispatch( {
            type: GET_ERROR,
            payload: "Error in Redux getAllCategory : " + e
        } )
    }
}

//get All category with pagination
export const getAllCategoryPage = ( page ) => async ( dispatch ) => {

    try {
        const res = await useGetData( `api/v1/categories?limit=5&page=${page}&fields=_id,name,image` );
        // console.log(res)
        dispatch( {
            type: GET_ALL_CATEGORY,
            payload: res
        } )
    }
    catch ( e ) {
        dispatch( {
            type: GET_ERROR,
            payload: "Error in Redux getAllCAtegoryPage : " + e
        } )
    }
}

//Create category 
export const createCategory = ( fromData ) => async ( dispatch ) => {

    try {
        const res = await useInsertDataWithImage( `api/v1/categories`, fromData );
        // console.log(res)
        dispatch( {
            type: CREATE_CATEGORY,
            payload: res,
            loading: true
        } )
    }
    catch ( e ) {
        dispatch( {
            type: GET_ERROR,
            payload: "Error in Redux CreateCategory: " + e
        } )
    }
}


//get on Category with id
export const getOneCategoyr = ( id ) => async ( dispatch ) => {

    try {
        const res = await useGetData( `api/v1/categories/${id}` );
        // console.log(res)
        dispatch( {
            type: GET_ONE_CATEGORY,
            payload: res
        } )
    }
    catch ( e ) {
        dispatch( {
            type: GET_ERROR,
            payload: "Error in Redux getOneCategoyr : " + e
        } )
    }
}