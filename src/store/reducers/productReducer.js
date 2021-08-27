import {ADD_PRODUCT, REMOVE_PRODUCT} from "../constants/productConsts";

const initialStore = {
    products: []
}

export default function productReducer(store = initialStore, action){
    switch (action.type){
        case ADD_PRODUCT:
            return {
                ...store,
                products: [...store.products, action.product]
            }
        case REMOVE_PRODUCT:
            return {
                ...store,
                products: [...store.products, store.products.filter(item => item.id !== action.index)]
                //filter or splice with action.index

            }
        default:
            return store
    }
}