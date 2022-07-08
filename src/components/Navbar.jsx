import React from "react";
// import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="navbar-left">
            <a className="navbar-brand" href="/">
              <img src={require("../assets/img/logo.png")} alt="logo" />
            </a>
          </div>
          <div className="navbar-right">
            <img src={require("../assets/img/search.png")} alt="logo" />
            <img src={require("../assets/img/case.png")} alt="logo" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="true" aria-label="Toggle navigation">
              <span className="navbar-toggler_icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="nav-item">
                <div className="nav-link active" aria-current="page" href="/">
                  Home
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link" href="/">
                  Link
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link disabled">Disabled</div>
              </div>
            </div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
