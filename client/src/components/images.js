import React, { Component } from "react";
import { Col, Row, Container } from "./Grid/index";
import logo from "../images/logo.svg";
import eagles from "../images/philadelphia-eagles-logo.png";

class Images extends Component {
  state = {
    images: [],
  };

  render() {
    return (
      <Container fluid>
        <Row className="grid">
          <div className="img">
            <img src={logo} alt="reactImage" className="img-fluid clickItem" />
            <img
              src={eagles}
              alt="reactImage"
              className="img-fluid  clickItem"
            />
            <img src={logo} alt="reactImage" className="img-fluid  clickItem" />
          </div>

          <div className="img">
            <img src={logo} alt="reactImage" className="img-fluid  clickItem" />
            <img
              src={eagles}
              alt="reactImage"
              className="img-fluid clickItem"
            />
            <img src={logo} alt="reactImage" className="img-fluid  clickItem" />
          </div>

          <div className="img">
            <img src={logo} alt="reactImage" className="img-fluid  clickItem" />
            <img
              src={eagles}
              alt="reactImage"
              className="img-fluid  clickItem"
            />
            <img src={logo} alt="reactImage" className="img-fluid clickItem" />
          </div>
        </Row>
      </Container>
    );
  }
}

export default Images;
