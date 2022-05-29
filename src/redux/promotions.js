import * as ActionType from "./actionTypes";
export const Promotions = (state={isLoading : true, erMsg: null, promotions : []}, action) =>{

    switch(action.type){
        case ActionType.ADD_PROMOS:
            return {...state, isLoading : false, erMsg: null, promotions : action.payload}

        case ActionType.PROMOS_LOADING:
            return {...state, isLoading : true, erMsg: null, promotions : []}

        case ActionType.PROMOS_FAILED:
            return {...state, isLoading : false, erMsg: action.payload, promotions : []}

        default:
            return state
    }

}