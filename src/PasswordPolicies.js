import React, { Component } from "react";
import classNames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

class PasswordPolicies extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    //Changing classes according to isCapital variable.
    const capitalClass = classNames({
      conditionTrue: this.props.data.isCapital,
      conditionFalse: !this.props.data.isCapital
    });

    //Changing for isNumber variable.
    const numberClass = classNames({
      conditionTrue: this.props.data.isNumber,
      conditionFalse: !this.props.data.isNumber
    });

    //Changing for isSpecial variable.
    const specialClass = classNames({
      conditionTrue: this.props.data.isSpecial,
      conditionFalse: !this.props.data.isSpecial
    });

    //Changing for minChar variable
    const minCharClass = classNames({
      conditionTrue: this.props.data.minChar,
      conditionFalse: !this.props.data.minChar
    });

    return (
      <div className="PasswordPoliciesParent">
        <h2 className={minCharClass}>
          <FontAwesomeIcon icon={faCheckCircle} className="checkIcon" />
          <FontAwesomeIcon icon={faTimesCircle} className="timesIcon" /> {""}
          Contains 8+ Characters
        </h2>

        <h2 className={capitalClass}>
          <FontAwesomeIcon icon={faCheckCircle} className="checkIcon" />
          <FontAwesomeIcon icon={faTimesCircle} className="timesIcon" /> {""}
          Contains Uppercase
        </h2>

        <h2 className={numberClass}>
          <FontAwesomeIcon icon={faCheckCircle} className="checkIcon" />
          <FontAwesomeIcon icon={faTimesCircle} className="timesIcon" /> {""}
          Contains Number
        </h2>

        <h2 className={specialClass}>
          <FontAwesomeIcon icon={faCheckCircle} className="checkIcon" />
          <FontAwesomeIcon icon={faTimesCircle} className="timesIcon" /> {""}
          Contains Special Character
        </h2>
      </div>
    );
  }
}

export default PasswordPolicies;
