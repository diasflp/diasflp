import React, { Component } from "react";
import "./header.component.scss";

class headerComponent extends Component {
  render() {
    return (
      <header className="header">
        <div className="text_style">
          <b>
            <span>W</span>elco<span>me</span>
          </b>
        </div>
      </header>
    );
  }
}

export default headerComponent;
