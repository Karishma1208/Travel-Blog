import React from "react";
import ImageGallery from "./image-gallery.jsx";
import FullItinerary from "./itinerary-link.jsx";

import imageSet from "../data/image-set.js";
import text from "../data/text.js";

class DayFive extends React.Component {

  render() {
    const images = imageSet['place5'];
    const title = text['place5']['title'];
    const description = text['place5']['description'];

    return (
      <div className="day-container" {...this.props} >
        <div className='day-background-container' />
        <div className='card-container'>
          <div className="photo-container">
            <ImageGallery items={images} index='5' />
          </div>
          <div className="text-container">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            <FullItinerary />
          </div>
        </div>
      </div>
    );
  }
}

export default DayFive;
