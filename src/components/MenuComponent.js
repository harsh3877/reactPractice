import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { baseUrl } from "../shared/baseUrl";


import LoadingComponent from "./LoadingComponent";

const MenuComponent = (props) => {
  const menuItem = props.dish.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <Link to={`/menu/${dish.id}`}>
          <Card>
            <CardImg width="100%" src={baseUrl + dish.image} alt={dish.middle} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </Link>
      </div>
    );
  });

  if (props.dish.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <LoadingComponent />
        </div>
      </div>
    );
  } else if (props.dish.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.dish.errMess}</h4>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row">{menuItem}</div>
      </div>
    );
  }
};

export default MenuComponent;
