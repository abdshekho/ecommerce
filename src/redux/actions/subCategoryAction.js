import { GET_ERROR, CREATE_SUB_CATEGORY, GET_ALL_SUBCATEGORY,GET_ONE_SUB_CATEGORY } from "../type";
// import baseUrl from "../../Api/baseURL";
import {useGetData} from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
//Create category  with pagination
export const createSubCategory = ( data ) => async ( dispatch ) => {

    try {
        const res = await useInsertData( `api/v1/subcategories`, data );
        // console.log(res)
        dispatch( {
            type: CREATE_SUB_CATEGORY,
            payload: res,
            loading: true
        } )
    }
    catch ( e ) {
        dispatch( {
            type: GET_ERROR,
            payload: "Error in Redux createSubCategory: " + e
        } )
    }
}


//get sub Category depend in category id
export const getSubDependCategory = ( id ) => async ( dispatch ) => {

    try {
        const res = await useGetData( `api/v1/categories/${id}/subcategories` );
        // console.log(res)
        dispatch( {
            type: GET_ONE_SUB_CATEGORY,
            payload: res
        } )
    }
    catch ( e ) {
        dispatch( {
            type: GET_ERROR,
            payload: "Error in Redux getSubDependCategory: " + e
        } )
    }
}