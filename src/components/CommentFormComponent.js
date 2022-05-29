import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  Label,
  Col,
  Row,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

const CommentFormComponent = (props) => {
  const [ModalIsOpen, setModalIsOpen] = useState(false);

  function toggleModal() {
    setModalIsOpen(!ModalIsOpen);
  }

  function handelSubmit(values) {
    props.postComment(props.dishId, values.review, values.username, values.comment)

  }
  return (
    <div>
      <Button outline onClick={toggleModal}>
        <span className="fa fa-edit fa-lg"> submit comment</span>
      </Button>
      <Modal isOpen={ModalIsOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
        <ModalBody>
          <LocalForm className="" onSubmit={(values) => handelSubmit(values)}>
            <Row className="form-group">
            <Col>
              <Label htmlFor="review">Ratig</Label>
              <Control.select
                model=".review"
                name="review"
                id="review"
                className="form-control"
              >
                <option></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Control.select>
              </Col>
            </Row>
            <Row className="form-group">
            <Col>
              <Label htmlFor="username">User Name</Label>
              <Control.text
                model=".username"
                id="username"
                name="username"
                placeholder="User Name"
                className="form-control"
                validators={{
                  required,
                  minLength: minLength(3),
                  maxLength: maxLength(15),
                }}
              />
              <Errors
                className="text-danger"
                model=".username"
                show="touched"
                messages={{
                  required: "Required",
                  minLength: "Must be greater than two char",
                  maxLength: "Must be 15 character or less",
                }}
              />
              </Col>
            </Row>
            <Row className="form-group">
            <Col>
              <Label>Comment</Label>
              <Control.textarea
                model=".comment"
                id="comment"
                name="comment"
                placeholder="Comment"
                rows="5"
                className="form-control"
              />
              </Col>
            </Row>
            <Button type="submit" className="bg-primary" value="submit">
              Comment
            </Button>
          </LocalForm>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CommentFormComponent;
