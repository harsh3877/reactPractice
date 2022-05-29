import React, { useState, useEffect } from "react";

import HomeComponent from "./HomeComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import MenuComponent from "./MenuComponent";
import AboutComponent from "./AboutComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ContactComponent from "./ContactComponent";
import DishdetailComponent from "./DishdetailComponent";
import {
  postComment,
  fetchComments,
  fetchDishes,
  fetchPromos,
  fetchLeaders

} from "../redux/actionCreators";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const mapStateToProps = (state) => {
  return {
    dish: state.dish,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
  fetchComments: () => {
    dispatch(fetchComments());
  },
  fetchPromos: () => {
    dispatch(fetchPromos());
  },
  fetchLeaders:()=>{
    dispatch(fetchLeaders());
  }
});

const MainComponent = (props) => {
  useEffect(() => {
    props.fetchDishes();
    props.fetchComments();
    props.fetchPromos();
    props.fetchLeaders();
  }, []);

  const Homepage = () => {
    return (
      <HomeComponent
        dish={props.dish.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading={props.dish.isLoading}
        dishesErrMess={props.dish.erMsg}
        promotions={
          props.promotions.promotions.filter((promo) => promo.featured)[0]
        }
        promosLoading={props.promotions.isLoading}
        promosErrMess={props.promotions.erMsg}
        
        leaders={props.leaders.leaders.filter((leader) => leader.featured)[0]}
        leadersLoading={props.leaders.isLoading}
        leadersErrMess={props.leaders.erMsg}
      />
    );
  };

  const DishWithId = ({ match }) => {
    // console.log(match.params.id);
    return (
      <DishdetailComponent
        dish={
          props.dish.dishes.filter(
            (dish) => dish.id === parseInt(match.params.id, 10)
          )[0]
        }
        isLoading={props.dish.isLoading}
        errMess={props.dish.erMsg}
        comments={props.comments.comments.filter(
          (com) => com.dishId === parseInt(match.params.id, 10)
        )}
        commentsErrMess={props.comments.erMsg}
        postComment={props.postComment}
      />
    );
  };

  const aboutPage = () => {
    return <AboutComponent leaders={props.leaders.leaders}
    leadersLoading={props.leaders.isLoading}
    leadersErrMess={props.leaders.erMsg} />;
  };
  return (
    <div>
      <HeaderComponent />
      <TransitionGroup>
        <CSSTransition key={props.location.key} classNames="page" timeout={300}>
          <Switch>
            <Route path="/home" component={Homepage} />
            <Route
              exact
              path="/menu"
              component={() => <MenuComponent dish={props.dish} />}
            />
            <Route
              exact
              path="/contact"
              component={() => (
                <ContactComponent resetFeedbackForm={props.resetFeedbackForm} />
              )}
            />
            <Route path="/menu/:id" component={DishWithId} />
            <Route path="/about" component={aboutPage} />
            <Redirect to="/home" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <FooterComponent />
    </div>
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));
