import { ADD_URL_LIST } from "../constants/action-types";

const initialState = {
    urlList: []
}

function rootReducer( state = initialState, action) {
    if (action.type === ADD_URL_LIST) {
        return Object.assign({}, state, {
            urlList: state.urlList.concat(action.payload)
        })
    }
    return state
}

export default rootReducer
