import React, { Component } from 'react';

import cx from "classnames";

import './HomePage.scss';

import SignUpForm from "components/SignUpForm";
import TwitterIcon from "components/icons/Twitter";
import InstaIcon from "components/icons/Insta";

class HomePage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       overlayActive: false,
       hasBeenClosed: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        overlayActive: true
      })
    }, 5000);
  }

  closeOverlay = () => {    
    this.setState({ 
      overlayActive: false, 
      hasBeenClosed: true 
    });
  }

  showOverlay = () => {
    this.setState({
      overlayActive: true,
      hasBeenClosed: false
    })
  }
  
  render() {

    const bgImage1 = {
      backgroundImage: "url(" + this.props.image1SRC + ")"
    };

    const bgImage2 = {
      backgroundImage: "url(" + this.props.image2SRC + ")"
    };
    
    return <div className={cx("HomePage bg-color-black overflow-hidden w100 vh100 p1")}>
        <div className={cx("w100 h100 relative")}>
          <div className={cx("w100 h100 absolute flex")}>
            <div style={bgImage1} className={cx("HomePage__image1 h100 bg-cover overflow-hidden flex justify-between")}>
              <h1 className={cx("HomePage__headline cursive color-white p1 col-6")}>
                <a href="/">minikit</a>
              </h1>
              <div className={cx("flex flex-col col-6")}>
                <h3
                  className={cx(
                    "HomePage__sub-headline cursive color-white text-right pt1 pr1"
                  )}
                >
                  coming
                </h3>
                <h3
                  className={cx(
                    "HomePage__sub-headline cursive color-white text-right pr1"
                  )}
                >
                  soon
                </h3>

                <div className={cx("HomePage__svg-container h100 flex flex-col justify-end pr1 justify-end self-end")}>
                  <a href="https://twitter.com/minikitmusic" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon />
                  </a>
                </div>
              </div>
            </div>
            <div style={bgImage2} className={cx("HomePage__image2 h100 ml1 bg-cover overflow-hidden")}>
              <div className={cx({ hide: this.state.hasBeenClosed === false }, { show: this.state.hasBeenClosed === true })}>
                <div onClick={this.showOverlay} className={cx("HomePage__subscribe-button pointer absolute mt1 ml1 flex items-center jusitify-center")}>
                  <h3
                    className={cx(
                      "HomePage__sub-headline w100 text-center cursive color-white text-right p1"
                    )}
                  >
                    subscribe?
                  </h3>
                </div>
              </div>
              <div className={cx("h100 flex flex-col col-6")}>
                <div className={cx("HomePage__svg-container h100 flex flex-col justify-end pl1")}>
                  <a href="https://www.instagram.com/minikitmusic/" target="_blank" rel="noopener noreferrer">
                    <InstaIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        <div className={cx({ 'hide': this.state.overlayActive === false }, { 'show': this.state.overlayActive === true })}>
            <div className={cx("HomePage__overlay absolute bg-color-white h100 w100 flex items-center justify-center")}>
              <SignUpForm clickHandler={this.closeOverlay} />
            </div>
          </div>
        </div>
      </div>;
  }
}

export default HomePage;