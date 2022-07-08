import React from "react";

class Section2 extends React.Component {
  render() {
    return (
      <div className="container section2">
        <h3 className="section2-title">Featured</h3>
        <div className="row">
          <div className="col-12 section2-img">
            <img alt="truck" src={require("../assets/img/home/mobile/section-2_1.webp")} />
            <div className="container section2-btn">
              <button className="section2-btn_link1">Shop</button>
            </div>
          </div>
          <div className="col-12 section2-img">
            <img alt="truck" src={require("../assets/img/home/mobile/section-2_2.webp")} />
            <div className="container section2-btn">
              <button className="section2-btn_link2">Shop</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section2;
