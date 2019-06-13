import React from "react";
import "./App.scss";

function App() {
  return (
    <section className="app">
      <header className="header">
        <div className="text_style">
          <b>
            <span>W</span>elco<span>me</span>
          </b>
        </div>{" "}
      </header>{" "}
      <div className="content row start-xs">
        <div
          className="col-xs-12
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
          className="col-xs-12
                col-sm-6
                col-md-6
                col-lg-6 box_skills"
        >
          <p className="style_text">Skills</p>
        </div>
      </div>{" "}
      <footer className="footer">
        <p className="scss_lover"> SPA's ♥ CSS ♥ SASS ♥ </p>
      </footer>{" "}
    </section>
  );
}

export default App;
