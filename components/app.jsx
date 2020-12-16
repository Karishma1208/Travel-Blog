import React from "react";
import Header from "./header.jsx";

import Home from './home.jsx';
import DayOne from './place-one.jsx';
import DayTwo from './place-two.jsx';
import DayThree from './place-three.jsx';
import DayFour from './place-four.jsx';
import DayFive from './place-five.jsx';
import DaySix from './place-six.jsx';
import DaySeven from './place-seven.jsx';
import DayEight from './place-eight.jsx';

import '../styles/app.less';

class App extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      height: 0
    };

    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    const height = window.innerHeight;

    if (this.state.height != height) {
      this.setState({ height });
    }
  }

  render() {
    const style = this.state;

    return (
      <div className="fake-container">
        <Header />
        <div className='app-content'>
          <div className='day-background-container' style={style} />
          <Home style={style} />
          <DayOne style={style} />
          <DayTwo style={style} />
          <DayThree style={style} />
          <DayFour style={style} />
          <DayFive style={style} />
          <DaySix style={style} />
          <DaySeven style={style} />
          <DayEight style={style} />
        </div>
      </div>
    );
  }
}

export default App;


