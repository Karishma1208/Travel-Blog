import React from "react";

import '../styles/home.less';

class Home extends React.Component {

  render() {
    return (
      <div className="home-container" {...this.props} >
        <div className="background-container" />
        <div className="title-box">
          <div className="travel-year">Travel Blog 2020</div>
          <div className="travel-location">Travel Places</div>
        </div>
      </div>
    );
  }
}

export default Home;

