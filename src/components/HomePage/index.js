import React, { Component } from 'react';

import './HomePage.scss';

class HomePage extends Component {
  render() {
    const bgImage = {
      width: "65%",
      height: "100%",
      backgroundImage: "url(" + this.props.image1SRC + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      overflow: 'hidden',
    };

    const bgImage2 = {
      width: "35%",
      height: "100%",
      backgroundImage: "url(" + this.props.image2SRC + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      overflow: 'hidden',
    };

    const bg = {
      background: "black",
      padding: "1rem"
    }
    return <div style={bg} className="w100 vh100">
        <div className="w100 h100 relative">
          <div className="w100 h100 absolute flex">
            <div style={bgImage} className=""/>
            <div style={bgImage2} className="ml1"/>
          </div>
        </div>
      </div>;
  }
}

export default HomePage;