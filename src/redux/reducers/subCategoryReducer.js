import { GET_ALL_SUBCATEGORY, GET_ERROR, CREATE_SUB_CATEGORY,GET_ONE_SUB_CATEGORY } from "../type"

const initail = {
    subCategory: [],
    loading: true,
}
//loading : true => it is meaning not finish
//loading : false => it is meaning  finished

const subCategoryRducer = ( state = initail, actoin ) => {
    switch ( actoin.type ) {
        case GET_ALL_SUBCATEGORY:
            return {
                ...state,
                subCategory: actoin.payload,
                loading: false
            }
        case CREATE_SUB_CATEGORY:
            return {
                subCategory: actoin.payload,
                loading: false
            }
        case GET_ONE_SUB_CATEGORY:
            return {
                subCategory: actoin.payload,
                loading: false
            }
        case GET_ERROR:
            return {
                loading: true,
                subCategory: actoin.payload
            }
        default:
            return state;
    }
}

export default subCategoryRducer