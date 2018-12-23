import React, { Component } from 'react';

import cx from "classnames";

import './HomePage.scss';

import TwitterIcon from "components/icons/Twitter";
import InstaIcon from "components/icons/Insta";

class HomePage extends Component {
  render() {
    const bgImage1 = {
      backgroundImage: "url(" + this.props.image1SRC + ")",
    };

    const bgImage2 = {
      backgroundImage: "url(" + this.props.image2SRC + ")",
    };
    
    return <div className={cx("w100 vh100 bg-color-black p1")}>
        <div className={cx("w100 h100 relative")}>
          <div className={cx("w100 h100 absolute flex")}>
            <div style={bgImage1} className={cx("HomePage__image1 h100 bg-cover overflow-hidden flex justify-between")}>
              <h1 className={cx("HomePage__headline cursive color-white p1 col-6")}>
                minikit
              </h1>
              <div className={cx("flex flex-col col-6")}>
                <h3 className={cx("HomePage__sub-headline cursive color-white text-right pt1 pr1")}>
                  coming
                </h3>
                <h3
                className={cx("HomePage__sub-headline cursive color-white text-right pr1")}
                >soon</h3>
                <div className={cx("h100 flex flex-col justify-end pr1 col-2 justify-end self-end")}>
                  <TwitterIcon />
                </div>
              </div>
            </div>
          <div style={bgImage2} className={cx("HomePage__image2 h100 ml1 bg-cover overflow-hidden")} >     
            <div className={cx("h100 flex flex-col col-6")}>
              <div className={cx("h100 flex flex-col justify-end pl1 col-6")}>
                <InstaIcon />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>;
  }
}

export default HomePage;