import * as ActionType from "./actionTypes";

export const Comments = (
  state = {
    errMess: null,
    comments: [],
  },
  action
) => {
  switch (action.type) {
    case ActionType.ADD_COMMENTS:
      return {
        ...state,
        isLoading: false,
        erMsg: null,
        comments: action.payload,
      };

    case ActionType.COMMENTS_FAILED:
      return {
        ...state,
        isLoading: false,
        erMsg: action.payload,
        comments: [],
      };

    case ActionType.ADD_COMMENT:
      var comment = action.payload;
      return { ...state, comments: state.comments.concat(comment) };
    default:
      return state;
  }
};
