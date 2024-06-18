import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">انضم الينا </span>
          <span className="secondaryText">
            قم بالانضمام الى مجتمعنا للحصول على افضل الاسعار و العروض
            <br />
            جد حلمك بسرعة
          </span>
          <button className="button" href>
            <a href="mailto:zainkeepscode@gmail.com">البدء</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
