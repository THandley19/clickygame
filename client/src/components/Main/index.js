import React, { Component } from "react";
import images from "../../images.json";
import { Container, Row, Col } from "../Grid";
import Cards from "../Cards";
import MessageDisplay from "../MessageDisplay";
import Alert from "../Alert";
import Jumbotron from "../Jumbotron";

class MainGame extends Component {
  state = {
    userScore: 0,
    highScore: 0,
    images,
    message: "",
  };

  handleSelectedItem = (id, clicked) => {
    const currentOrder = this.state.images;

    if (!clicked) {
      currentOrder.forEach((image, i) => {
        if (id === image.id) {
          currentOrder[i].clicked = true;
        }
      });
      const userScore = this.state.userScore;
      const highScore = this.state.highScore;
      const newUserScore = userScore + 1;
      const newHighScore = newUserScore > highScore ? newUserScore : highScore;

      return this.setState({
        image: currentOrder.sort(() => Math.random() - 0.5),
        message: "You Guessed Correctly!",
        userScore: newUserScore,
        highScore: newHighScore,
      });
    } else if (clicked) {
      currentOrder.forEach((image, i) => {
        currentOrder[i].clicked = false;
      });
      return this.setState({
        images: currentOrder.sort(() => Math.random() - 0.5),
        message: "You Guessed Incorrectly!",
        userScore: 0,
      });
    }
    {
    }
  };

  render() {
    return (
      <Container>
        <Jumbotron
          title="NFL Clicky Game"
          userScore={this.state.userScore}
          message={this.state.message}
          highScore={this.state.highScore}
        />
        <Row>
          {this.state.images.map((images) => {
            return (
              <Col size="md-3 sm-6">
                <Cards
                  key={images.id}
                  handleSelectedItem={this.handleSelectedItem}
                  id={images.id}
                  image={images.img}
                ></Cards>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default MainGame;
