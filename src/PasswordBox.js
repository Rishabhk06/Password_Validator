import React, { Component } from "react";
import classNames from "classnames";
import PasswordPolicies from "./PasswordPolicies";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

class PasswordBox extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      isCapital: false,
      isNumber: false,
      isSpecial: false,
      minChar: 0,
      eyeicon: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.showhidefnc = this.showhidefnc.bind(this);
  }

  handleChange(event) {
    var { value } = event.target;
    var isCapital,
      isNumber,
      isSpecial,
      minChar = 0;

    //Checking for Capital letter
    if (value.match(/[A-Z]/)) {
      isCapital = true;
    } else {
      isCapital = false;
    }

    //Checking for Number
    if (value.match(/[0-9]/)) {
      isNumber = true;
    } else {
      isNumber = false;
    }

    //Checking for Special Character
    if (value.match(/[!@#$%^&*()]/)) {
      isSpecial = true;
    } else {
      isSpecial = false;
    }

    //Checking no. of characters
    minChar = value.length;

    if (minChar === 8 || minChar > 8) {
      minChar = true;
    } else {
      minChar = false;
    }

    this.setState({
      password: value,
      isCapital: isCapital,
      isNumber: isNumber,
      isSpecial: isSpecial,
      minChar: minChar
    });
  }

  showhidefnc() {
    this.setState({
      eyeicon: !this.state.eyeicon
    });
  }

  render() {
    const changeClass = classNames({
      show: this.state.eyeicon,
      hide: !this.state.eyeicon
    });

    return (
      <div>
        <h1 className="heading"> Password Validator </h1>
        <div className="PasswordBoxParent">
          <form>
            {/* <h1> {this.state.password} </h1> */}
            <div className={changeClass}>
              <FontAwesomeIcon
                icon={this.state.eyeicon ? faEye : faEyeSlash}
                className="eyebtn"
                onClick={this.showhidefnc}
              />
              <FontAwesomeIcon
                icon={this.state.eyeicon ? faEye : faEyeSlash}
                className="eyeslashbtn"
                onClick={this.showhidefnc}
              />
              <input
                type={this.state.eyeicon ? "password" : "text"}
                placeholder="Enter password"
                className="PasswordBox"
                onChange={this.handleChange}
              />
            </div>
          </form>

          <PasswordPolicies data={this.state} />
        </div>
      </div>
    );
  }
}

export default PasswordBox;
