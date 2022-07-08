import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="container footer">
        <div className="row">
          <div className="col-12 d-flex flex-column">
            <p href="/">Find A Store</p>
            <p href="/">Find A Store</p>
            <p href="/">Find A Store</p>
            <p href="/">Find A Store</p>
          </div>
          <div className="col-12">
            <p href="/">Get Help</p>
          </div>
          <div className="col-12">
            <p href="/">Abut Nike</p>
          </div>
          <div className="col-12">
            <p>News</p>
            <p>Carreer</p>
            <p>Investors</p>
            <p>Sustainability</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
