import * as ActionType from "./actionTypes";
import { baseUrl } from "../shared/baseUrl";

export const addComment = (comment) => ({
  type: ActionType.ADD_COMMENT,
  payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
  const newComment = {
    dishId: dishId,
    rating : rating,
    author : author,
    comment : comment
  }

  newComment.date = new Date().toISOString();

  return fetch(baseUrl + 'comments',{
    method: 'POST',
    body: JSON.stringify(newComment),
    headers : {
        'Content-Type' : 'application/json'
    },
    credentials : 'same-origin'
  })
  .then(response =>{
    if(response.ok){
      return response
    }else{
      var error = new Error('Error' + response.status + ":" + response.statusText)
      error.response = response
      throw error;
    }
  },error=>{
    var errmess = new Error(error.message)
    throw errmess;
  })
  .then(response => response.json())
  .then(response => dispatch(addComment(response)))
  .catch(error=>{
    console.log('post Comment' + error.message)
    alert('Your Comment Could not be posted\nError : '+ error.message) 
  });
}

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));
  return fetch(baseUrl + 'dishes')
          .then(response =>{
            if(response.ok){
              return response
            }else{
              var error = new Error('Error' + response.status + ":" + response.statusText)
              error.response = response
              throw error;
            }
          },error=>{
            var errmess = new Error(error.message)
            throw errmess;
          })
          .then(response => response.json())
          .then(dishes => dispatch(addDishes(dishes)))
          .catch(error=>{
            dispatch(dishesFailed(error.message))
          });
};

export const dishesLoading = () => ({
  type: ActionType.DISHES_LOADING,
});

export const dishesFailed = (errMsg) => ({
  type: ActionType.DISHES_FAILED,
  payload: errMsg
});

export const addDishes = (dishes) =>({
    type:ActionType.ADD_DISHES,
    payload : dishes
})

export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + 'comments')
          .then(response =>{
            if(response.ok){
              return response
            }else{
              var error = new Error('Error' + response.status + ":" + response.statusText)
              error.response = response
              throw error;
            }
          },error=>{
            var errmess = new Error(error.message)
            throw errmess;
          })
          .then(response => response.json())
          .then(comments => dispatch(addComments(comments)))
          .catch(error=>{
            dispatch(commentsFailed(error.message))
          });
};

export const commentsFailed = (errMsg) => ({
  type: ActionType.COMMENTS_FAILED,
  payload: errMsg
});

export const addComments = (comments) =>({
    type:ActionType.ADD_COMMENTS,
    payload : comments
})


export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading(true));
  return fetch(baseUrl + 'promotions')
          .then(response =>{
            if(response.ok){
              return response
            }else{
              var error = new Error('Error' + response.status + ":" + response.statusText)
              error.response = response
              throw error;
            }
          },error=>{
            var errmess = new Error(error.message)
            throw errmess;
          })
          .then(response => response.json())
          .then(promos => dispatch(addPromos(promos)))
          .catch(error=>{
            dispatch(promosFailed(error.message))
          });
};

export const promosLoading = () => ({
  type: ActionType.PROMOS_LOADING,
});

export const promosFailed = (errMsg) => ({
  type: ActionType.PROMOS_FAILED,
  payload: errMsg
});

export const addPromos = (promos) =>({
    type:ActionType.ADD_PROMOS,
    payload : promos
})


export const fetchLeaders = () => (dispatch) => {
  return fetch(baseUrl + 'leaders')
          .then(response =>{
            if(response.ok){
              return response
            }else{
              var error = new Error('Error' + response.status + ":" + response.statusText)
              error.response = response
              throw error;
            }
          },error=>{
            var errmess = new Error(error.message)
            throw errmess;
          })
          .then(response => response.json())
          .then(leaders => dispatch(addLeaders(leaders)))
          .catch(error=>{
            dispatch(leadersFailed(error.message))
          });
};

export const addLeaders = (leaders) =>({
  type:ActionType.ADD_LEADERS,
  payload : leaders
});

export const leadersFailed = (errMsg) => ({
  type: ActionType.LEADERS_FAILED,
  payload: errMsg
});



export const postFeedback = (id, firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {
  const newFeedback = {
    id : id,
    firstname : firstname,
    lastname : lastname,
    telnum : telnum,
    email : email,
    agree : agree,
    contactType : contactType,
    message : message
  }

  newFeedback.date = new Date().toISOString();

  return fetch(baseUrl + 'feedback',{
    method: 'POST',
    body: JSON.stringify(newFeedback),
    headers : {
        'Content-Type' : 'application/json'
    },
    credentials : 'same-origin'
  })
  .then(response =>{
    if(response.ok){
      return response
    }else{
      var error = new Error('Error' + response.status + ":" + response.statusText)
      error.response = response
      throw error;
    }
  },error=>{
    var errmess = new Error(error.message)
    throw errmess;
  })
  .then(response => response.json())
  .then(response => dispatch(addFeedback(response)))
  .catch(error=>{
    console.log('post Comment' + error.message)
    alert('Your Feedback Could not be posted\nError : '+ error.message) 
  });
}

export const addFeedback = (feedback) => ({
  type: ActionType.ADD_FEEDBACK,
  payload: feedback
});

export const feedbackFailed = (errMsg) => ({
  type: ActionType.FEEDBACK_FAILED,
  payload: errMsg
});