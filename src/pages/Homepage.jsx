import React from "react";
import Section1 from "../components/Section1";
import Section2 from "../components/section2";
// const small = "../assets/img/home/mobile/section-1.webp";
// const large = "../assets/img/home/desktop/section-1.webp";

class HomePage extends React.Component {
  render() {
    return (
      <div className="container">
        {/* Section 1  */}
        <Section1 />
        {/* <div className="section-1"> */}
        {/* <img src={small} srcSet={`${small} 300w, ${large} 1280w`} onLoad={this.onLoad} /> */}
        {/* <img src={require("../assets/img/home/mobile/section-1.webp")} alt="logo" /> */}
        {/* </div> */}
        <Section2 />
      </div>
    );
  }
}

export default HomePage;
