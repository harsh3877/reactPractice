import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import CommentFormComponent from "./CommentFormComponent";
import LoadingComponent from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";


const DishdetailComponent = (props) => {
  const renderComment = props.comments.map((com) => {
    return (
      <div key={com.id} className="py-2">
        {com.comment} <br />
        --{com.author}, {com.date}
      </div>
    );
  });

  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <LoadingComponent />
        </div>
      </div>
    );
  }else if(props.errMess){
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  }else if (props.dish != null) {
    return (
      <React.Fragment>
        <div className="col-12 col-md-12">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <Card>
                  <CardImg
                    width="100%"
                    src={baseUrl + props.dish.image}
                    alt={props.dish.middle}
                  />
                  <CardBody>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description}</CardText>
                  </CardBody>
                </Card>
              </div>
              <div className="col-12 col-md-6">
                <h1>Comments</h1>
                {renderComment}

                <CommentFormComponent
                  dishId={props.dish.id}
                  postComment={props.postComment}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default DishdetailComponent;
