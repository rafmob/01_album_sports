import React, { Component } from "react";
import Carousel from "react-simply-carousel";

class Carousel extends Component {
  state = {
    activeSlideIndex: 0,
  };

  setActiveSlideIndex = (newActiveSlideIndex) => {
    this.setState({
      activeSlideIndex: newActiveSlideIndex,
    });
  };

  render() {
    return (
      <Carousel
        activeSlideIndex={this.state.activeSlideIndex}
        onRequestChange={this.setActiveSlideIndex}
        itemsToShow={3}
        itemsToScroll={3}
      >
        <div style={{ width: 300, height: 300 }}>slide 0</div>
        <div style={{ width: 300, height: 300 }}>slide 1</div>
        <div style={{ width: 300, height: 300 }}>slide 2</div>
        
      </Carousel>
    );
  }
}