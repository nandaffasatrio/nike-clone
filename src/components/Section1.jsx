import React from "react";
// const small = "../assets/img/home/mobile/section-1.webp";
// const large = "../assets/img/home/desktop/section-1.webp";

class Section1 extends React.Component {
  render() {
    return (
      <div className="container mb-5 section1">
        <img className="section1-img" src={require("../assets/img/home/mobile/section-1.webp")} alt="logo" />
        <h1>
          LOOKS GOOD. <br />
          RUNS GOOD. <br />
          FEELS GOOD.
        </h1>
        <p>A smooth ride with an endless amount of comfort, the Nike React Infinity Run Flyknit 3 is the first step towards your best run yet.</p>
        <button className="section1-button">Shop</button>
      </div>
    );
  }
}

export default Section1;
