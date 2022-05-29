// import { DISHES } from "../shared/dishesh";
import * as ActionType from "./actionTypes";

export const Dishes = (state = {isLoading : true, erMsg: null, dishes : []}, action) =>{

    switch(action.type){
        case ActionType.ADD_DISHES:
            return {...state, isLoading : false, erMsg: null, dishes : action.payload}

        case ActionType.DISHES_LOADING:
            return {...state, isLoading : true, erMsg: null, dishes : []}

        case ActionType.DISHES_FAILED:
            return {...state, isLoading : false, erMsg: action.payload, dishes : []}

        default:
            return state
    }

}