import { ADD_URL_LIST } from "../constants/action-types"

export function addUrlList(payload) {
    return {type: ADD_URL_LIST, payload}
}