import React from "react";
import ImageGallery from "./image-gallery.jsx";
import FullItinerary from "./itinerary-link.jsx";

import imageSet from "../data/image-set.js";
import text from "../data/text.js";

class DayOne extends React.Component {

  render() {
    const images = imageSet['place1'];
    const title = text['place1']['title'];
    const description = text['place1']['description'];

    return (
      <div className="day-container" {...this.props} >
        <div className='card-container'>
          <div className="photo-container">
            <ImageGallery items={images} index='1' />
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

export default DayOne;
