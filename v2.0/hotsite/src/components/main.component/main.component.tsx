import React, { Component } from 'react';
import './main.component.scss';

class mainComponent extends Component {
  render() {
    return (
      <div className="content flex-justify-space-between row start-xs">
        <div
          className="
            col-xs-12
            col-sm-6
            col-md-6 
            col-lg-6"
        >
          <p className="style_hello">
            Hello, my name is Felipe Dias and I am a front-end developer.
          </p>
          <div className="avatar" />
        </div>
        <div
          className="
            col-xs-12
            col-sm-6
            col-md-6
            col-lg-6 box_skills"
        >
          <p className="style_text">Skills</p>
        </div>
      </div>
    );
  }
}

export default mainComponent;
