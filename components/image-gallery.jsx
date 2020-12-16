import React from "react";
import Swipe from "swipe-js";

import pageState from '../states/page.js';

require('../styles/image-gallery.less');

class ImageGallery extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 1
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    const ids = 'slider' + this.props.index;

    this.mySwipe = Swipe(document.getElementById(ids), {
      startSlide: 0,
      speed: 400,
      transitionEnd: this.updateCurrentIndex.bind(this)
    });

    const isMobile = navigator.userAgent.toLowerCase().indexOf('mobile') != -1;

    if (!isMobile) {
      window.addEventListener('keydown', this.handleKeyDown);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    const key = parseInt(event.keyCode || event.which || 0)

    if (this.props.index == pageState.active.valueOf() && key == 37) {
      this.slideLeft();
    } else if (this.props.index == pageState.active.valueOf() && key == 39) {
      this.slideRight();
    }
    this.updateCurrentIndex();
  }

  slideLeft() {
    this.mySwipe.prev();
  }

  slideRight(event) {
    this.mySwipe.next();
  }

  updateCurrentIndex() {
    const currentIndex = this.mySwipe ? this.mySwipe.getPos() + 1 : 1;
    this.setState({ currentIndex });
  }

  render() {
    const { currentIndex } = this.state;
    const { items } = this.props;

    const listItems = items.map((image, index) => {
      return (
        <div className="image" key={index} >
          <img src={image} />
        </div>
      );
    });

    const ids = 'slider' + this.props.index;

    return (
      <div className="image-gallery">
        <div id={ids} className='swipe'>
          <div className='swipe-wrap'>
            {listItems}
          </div>
        </div>
        <div className='index'>{currentIndex}/{items.length}</div>

        <a className='image-gallery-left-nav'
          onClick={this.slideLeft.bind(this)} />

        <a className='image-gallery-right-nav'
          onClick={this.slideRight.bind(this)} />
      </div>
    );
  }
}

export default ImageGallery;
