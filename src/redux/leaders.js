
import * as ActionType from "./actionTypes";

export const Leaders = (state={isLoading:true, erMsg: null, leaders : []}, action) =>{

    switch(action.type){
        case ActionType.ADD_LEADERS:
            return {...state, isLoading : false, erMsg: null, leaders : action.payload}
      
        case ActionType.LEADERS_FAILED:
            return {...state, isLoading : false, erMsg: action.payload, leaders : ['ss']}

        default:
            return state
    }

}