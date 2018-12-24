import React, { PureComponent } from "react";

import cx from 'classnames';

import keys from "../../config";
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import ReactJoiValidations from 'react-joi-validation'
import Joi from 'joi-browser'

import CloseIcon from "components/icons/Close";

import './SignUpForm.scss'

const MAILCHIMP_URL = keys.mailChimpURL;

ReactJoiValidations.setJoi(Joi);

const schema = Joi.object().keys({
  firstName: Joi.string().min(2).max(20).required(),
  emailAddress: Joi.string().email().required(),
  zipcode: Joi.string().length(5).required()
});

export default class SignUpForm extends PureComponent {
  constructor(props) {
    super(...arguments)

    this.state = {
      firstName: '',
      emailAddress: '',
      zipcode: '',
      message: '',
      messageActive: false,
      closeOverlay: false
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  componentDidUpdate() {
    if (this.state.closeOverlay) {
      setTimeout(() => {
        this.props.clickHandler();
      }, 2500);
    }
  }

  render() {
    return <div className="SignUpForm w100">
        <MailchimpSubscribe url={MAILCHIMP_URL} render={({ subscribe, status }) => <div>
              <div className={cx("flex justify-end w100")}>
                <div className={cx("pointer")}>
                  <CloseIcon clickHandler={this.props.clickHandler} />
                </div>
              </div>
              <form className="flex flex-col items-center justify-center" onSubmit={event => {
                  event.preventDefault();

                  const result = Joi.validate({ firstName: this.state.firstName, emailAddress: this.state.emailAddress, zipcode: this.state.zipcode }, schema);

                  if (result.error) {
                    const errorMessage = result.error.message;
                    if (errorMessage.split(" ").includes('"firstName"')) {
                      this.setState({
                        message:
                          "oops, an error has occured. please make sure your name is between 2 and 20 characters long :]",
                        messageActive: true
                      });
                    } else if (errorMessage
                        .split(" ")
                        .includes('"emailAddress"')) {
                      this.setState({
                        message:
                          "oops, an error has occured. please make sure to inlcude your email :]",
                        messageActive: true
                      });
                    } else if (errorMessage
                        .split(" ")
                        .includes('"zipcode"')) {
                      this.setState({
                        message:
                          "oops, an error has occured. please make sure to indlude your zipcode :]",
                        messageActive: true
                      });
                    }
                  } else {
                    subscribe({
                      FNAME: result.value.firstName,
                      EMAIL: result.value.emailAddress,
                      MMERGE6: result.value.zipcode
                    });
                    // if (this.state.closeOverlay) {
                    //   setTimeout(() => {
                    //     this.props.clickHandler();
                    //   }, 3500);
                    // }
                  }
                }}>
                <h3 className="SignUpForm__headline px2 cursive color-white center">
                  subscribe to our mailing list :]
                </h3>
                <label>
                  <input required id="inputOne" className="handwriting my1 w100" type="text" placeholder="first name" name="firstName" value={this.state.firstNameAddress} onChange={this.handleChange} />
                </label>
                <label>
                  <input required id="inputTwo" className="handwriting my1 w100" type="email" placeholder="hello@example.com" name="emailAddress" value={this.state.emailAddress} onChange={this.handleChange} />
                </label>
                <label>
                  <input required id="inputThree" className="handwriting my1 w100" type="text" placeholder="zipcode" name="zipcode" value={this.state.zipcode} onChange={this.handleChange} />
                </label>
                <div className="w100 flex flex-col items-center justify-center">
                <button className="SignUpForm__button handwriting pointer my1" type="submit">
                    submit
                  </button>
                </div>
              </form>
              {status === "sending" ? this.setState({
                    message: "loading...",
                    messageActive: true
                  }) : null}
              {status === "success" ? this.setState({
                    message: "thanks for subscribing",
                    messageActive: true,
                    closeOverlay: true
                  }) : null}
              {status === "error" ? this.setState({
                    message: "oops, please try again",
                    messageActive: true
                  }) : null}
            </div>} />
        <div className="relative w100">
          <p className={cx("absolute w100 center mt1 px2 color-white", {
              "SignUpForm__message text-center handwriting": this.state
                .messageActive
            })}>
            {this.state.message}
          </p>
        </div>
      </div>;
  }
}

