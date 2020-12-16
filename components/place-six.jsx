import React from "react";
import ImageGallery from "./image-gallery.jsx";
import FullItinerary from "./itinerary-link.jsx";

import imageSet from "../data/image-set.js";
import text from "../data/text.js";

class DaySix extends React.Component {

  render() {
    const images = imageSet['place6'];
    const title = text['place6']['title'];
    const description = text['place6']['description'];

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
            <ImageGallery items={images} index='6' />
          </div>
        </div>
      </div>
    );
  }
}

export default DaySix;
