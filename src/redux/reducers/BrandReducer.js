import { GET_ALL_BRAND, GET_ERROR, CREATE_BRAND,GET_ONE_BRAND } from "../type"

const initail = {
    brand: [],
    oneBrand:[],
    loading: true,
}
//loading : true => it is meaning not finish
//loading : false => it is meaning  finished

const brandReducer = ( state = initail, actoin ) => {
    switch ( actoin.type ) {
        case GET_ALL_BRAND:
            return {
                ...state,
                brand: actoin.payload,
                loading: false
            }
        case GET_ONE_BRAND:
            return {
                oneBrand: actoin.payload,
                loading: false
            }
        case CREATE_BRAND:
            return {
                brand: actoin.payload,
                loading: false
            }

        case GET_ERROR:
            return {
                loading: true,
                brand: actoin.payload
            }
        default:
            return state;
    }
}

export default brandReducer