//store that assembler all things 
import { legacy_createStore as createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./reducers/rootReducer"
import { composeWithDevTools } from "redux-devtools-extension"

const initailState = {}
//to async await
const meddlware = [ thunk ]


const store = createStore( rootReducer,
                            initailState,
                                composeWithDevTools( applyMiddleware( ...meddlware ) ) )

export default store;