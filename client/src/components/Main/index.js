import React, { Component } from "react";
import images from "../../images.json";
import { Container, Row, Col } from "../Grid";
import Jumbotron from "../Jumbotron";
import Cards from "../Cards";
import MessageDisplay from "../MessageDisplay";
import Alert from "../Alert";
import Nav from "../Nav";

class MainGame extends Component {
  state = {
    userScore: 0,
    highScore: 0,
    selectedImages: [],
    images,
    message: "",
  };

  handleSelectedItem = (event) => {
    console.log(event);

    const name = event;
    this.guessCheck(name, this.updateHighScore);
  };

  showShuffledImages() {
    this.setState({
      images: this.shuffleImages(images),
    });
  }

  shuffleImages(images) {
    images.sort(() => Math.random() - 0.5);
  }

  guessCheck(name) {
    if (this.state.selectedImages.includes(name)) {
      this.setState({
        message: "You already selected that team!",
        userScore: 0,
        selectedImages: [],
      });
    } else {
      this.setState({
        userScore: this.state.userScore + 1,
        message: "You guessed that one correctly!",
      });
      this.state.selectedImages.push(name);
    }
  }

  updateHighScore() {
    if (this.state.userScore > this.state.highScore) {
      this.setState({
        highScore: this.state.highScore + 1,
      });
    }
  }

  notifactionWinner() {
    if (this.state.userScore === 12) {
      this.setState({
        message: "You Won! Good Job!",
        userScore: 0,
        selectedImages: [],
      });
    }
  }

  render() {
    return (
      <Container>
        <Nav
          title="NFL Clicky Game"
          score={this.state.userScore}
          message={this.state.message}
          highScore={this.state.highScore}
        />
        <Row>
          <MessageDisplay>
            {this.state.message === "You guessed that one correctly!" ? (
              <Alert message={this.state.message} />
            ) : (
              <Alert message={this.state.message} />
            )}
          </MessageDisplay>
        </Row>
        <Row>
          {this.state.images.map((images) => {
            return (
              <Col size="md-3 sm-6">
                <Cards
                  key={images.id}
                  handleSelectedItem={this.handleSelectedItem}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
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
