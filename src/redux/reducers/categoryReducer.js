import { GET_ALL_CATEGORY, GET_ERROR, CREATE_CATEGORY, GET_ONE_CATEGORY, GET_ALL_CATEGORY_ToNav } from "../type"

const initail = {
    category: [],
    categoryToNav: [],
    onCategory: [],
    loading: true,
}
//loading : true => it is meaning not finish
//loading : false => it is meaning  finished

const categoryRducer = ( state = initail, actoin ) => {
    switch ( actoin.type ) {
        case GET_ALL_CATEGORY:
            return {
                ...state,
                category: actoin.payload,
                loading: false
            }
        case GET_ALL_CATEGORY_ToNav:
            return {
                state,
                categoryToNav: actoin.payload,
                loading: false
            }
        case GET_ONE_CATEGORY:
            return {
                ...state,
                onCategory: actoin.payload,
                loading: false
            }
        case CREATE_CATEGORY:
            return {
                category: actoin.payload,
                loading: false
            }

        case GET_ERROR:
            return {
                loading: true,
                category: actoin.payload
            }
        default:
            return state;
    }
}

export default categoryRducer