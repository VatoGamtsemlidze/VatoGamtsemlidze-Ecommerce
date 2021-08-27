import {ADD_PRODUCT, REMOVE_PRODUCT} from "../constants/productConsts";

const initialStore = {
    products: []
}

export default function productReducer(store = initialStore, action){
    switch (action.type){
        case ADD_PRODUCT:
            return {
                ...store,
                products: action.products
            }
        default:
            return store
    }
}