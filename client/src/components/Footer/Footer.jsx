import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.jpg" alt="" width={120} />
          <span className="secondaryText">
            تطلعاتنا هي ايجاد الاشخاص <br />
            افضل عقار يلبي طموحاتهم.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">المعلومات</span>
          <span className="secondaryText">145 دمشق, FL 5467, الجمهورية العربية السورية</span>
          <span className="secondarytext">Developed by ali zamzam</span>
          <div className="flexCenter f-menu">
            <span>معروضات</span>
            <span>خدمات</span>
            <span>منتجات</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
