import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
  const [MenuIsOpen, setMenuIsOpen] = useState(false);
  const [ModalIsOpen, setModalIsOpen] = useState(false);

  function toggleNav() {
    setMenuIsOpen(!MenuIsOpen);
  }

  function toggleModal() {
    setModalIsOpen(!ModalIsOpen);
  }

  function handleLogin(event){
    toggleModal();
    alert('username: '+username.value+" password: "+password.value+" remember: "+remember.value);

    event.preventDefault();
  }

  var username, password, remember;
  return (
    <React.Fragment>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={toggleNav} />
          <NavbarBrand className="mx-auto" href="/">
            <img
              src="../assets/images/logo.png"
              height="30"
              width="41"
              alt="BrandName"
            />
          </NavbarBrand>
          <Collapse isOpen={MenuIsOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"> Home</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/about">
                  <span className="fa fa-info fa-lg"> About</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/menu">
                  <span className="fa fa-list fa-lg"> Menu</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contact">
                  <span className="fa fa-address-card fa-lg"> Contact</span>
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto">
              <NavItem>
                <Button outline onClick={toggleModal}>
                  <span className="fa fa-sign-in fa-lg"> Login</span>
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>

      <div className="jumbotron">
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Restaurant app</h1>
              <p>We take inspiration from the best cousins</p>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={ModalIsOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label htmlFor="username">User Name</Label>
              <Input type="text" id="username" name="username" innerRef={(input => username = input)}/>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">User Name</Label>
              <Input type="password" id="password" name="password" innerRef={(input => password = input)}/>
            </FormGroup>
            <FormGroup check>
              <Label check></Label>
              <Input type="checkbox" name="remember" innerRef={(input => remember = input)}/>
              Remember Me
            </FormGroup>
            <Button type="submit" className="bg-primary" value="submit">Login</Button>
          </Form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default HeaderComponent;
