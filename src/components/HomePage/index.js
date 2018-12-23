import React, { Component } from 'react';

import cx from "classnames";

import './HomePage.scss';

class HomePage extends Component {
  render() {
    const bgImage1 = {
      backgroundImage: "url(" + this.props.image1SRC + ")",
    };

    const bgImage2 = {
      backgroundImage: "url(" + this.props.image2SRC + ")",
    };
    
    return (
      <div className={cx('w100 vh100 bg-color-black p1')}>
        <div className={cx('w100 h100 relative')}>
          <div className={cx('w100 h100 absolute flex')}>
            <div style={bgImage1} className={cx('HomePage__image1 h100 bg-cover overflow-hidden')}>
              <h1 className={cx('HomePage__headline color-white p1')}>minikit</h1>
            </div>
            <div style={bgImage2} className={cx('HomePage__image2 h100 ml1 bg-cover overflow-hidden') } ></div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;