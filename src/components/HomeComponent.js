import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTextProps,
  CardSubtitle,
  CardTitle,
} from "reactstrap";
 import LoadingComponent from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";


function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return <LoadingComponent />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else {
    return (
      <Card>
        <CardImg src={baseUrl + item.image} alt={item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? (
            <CardSubtitle>{item.designation}</CardSubtitle>
          ) : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    );
  }
}

const HomeComponent = (props) => {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.dish}
            isLoading={props.dishesLoading}
            errMess={props.dishesErrMess}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.promotions} 
          isLoading={props.promosLoading}
          errMess={props.promosErrMess}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leaders} 
          isLoading={props.leadersLoading}
          errMess={props.leadersErrMess}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
