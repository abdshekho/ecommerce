//rootReducer: combine all reducer 
import { combineReducers } from "redux";
import categoryRducer from "./categoryReducer";
import brandReducer from "./BrandReducer";
import subCategoryRducer from "./subCategoryReducer";
import productsRducer from "./productsReducer";
import authReducer from './authReducer'
import reviewReducer from "./reviewReducer";
import addToWishListReducer from './wishListReducer'
import couponReducer from "./couponReducer";
import userAddressesReducer from './userAddressesReducer'
import cartReducer from "./cartReducer";
import checkoutReducer from "./checkoutReducer";
import orderReducer from "./orderReducer";

export default combineReducers( {
    allCategory: categoryRducer,
    allBrand: brandReducer,
    subCategory: subCategoryRducer,
    allproduts: productsRducer,
    authReducer: authReducer,
    reviewReducer: reviewReducer,
    addToWishListReducer: addToWishListReducer,
    couponReducer: couponReducer,
    userAddressesReducer: userAddressesReducer,
    cartReducer: cartReducer,
    checkoutReducer: checkoutReducer,
    orderReducer: orderReducer
} )