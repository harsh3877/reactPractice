import * as ActionType from "./actionTypes";

export const Feedback = (
  state = {
    errMess: null,
    feedback: [],
  },
  action
) => {
  switch (action.type) {
    case ActionType.ADD_FEEDBACKS:
      return {
        ...state,
        isLoading: false,
        erMsg: null,
        feedback: action.payload,
      };

    case ActionType.FEEDBACK_FAILED:
      return {
        ...state,
        isLoading: false,
        erMsg: action.payload,
        feedback: [],
      };

    case ActionType.ADD_FEEDBACK:
      var fb = action.payload;
      return { ...state, feedback: state.feedback.concat(fb) };
    default:
      return state;
  }
};
