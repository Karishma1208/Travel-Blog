import React from "react";
import ImageGallery from "./image-gallery.jsx";
import FullItinerary from "./itinerary-link.jsx";

import imageSet from "../data/image-set.js";
import text from "../data/text.js";

class DayEight extends React.Component {

  render() {
    const images = imageSet['place8'];
    const title = text['place8']['title'];
    const description = text['place8']['description'];

    return (
      <div className="day-container" {...this.props} >
        <div className='day-background-container' />
        <div className='card-container'>
          <div className="text-container arrow-right">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            <FullItinerary />
          </div>
          <div className="photo-container">
            <ImageGallery items={images} index='8' />
          </div>
        </div>
      </div>
    );
  }
}

export default DayEight;
