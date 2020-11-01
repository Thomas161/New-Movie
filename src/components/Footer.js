import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <div id="footerContainer">
        <p id="artwork">
          artwork by:
          <a href="https://unsplash.com/@myke_simon" alt="myke_simon">
            {" "}
            Myke Simon &
          </a>
          <a href="https://unsplash.com/@delaneyvan" alt="delaney_van">
            {" "}
            Delaney Van
          </a>
        </p>
      </div>
    </>
  );
};
export default Footer;
