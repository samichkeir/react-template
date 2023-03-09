// import '/js/jquery.min.js';
// import '/js/bootstrap.bundle.min.js';
// import '/js/custom.min.js';


import React from "react";
import Footersection from "./components/Footer";
import Menu from "./components/Menu";
import Topnav from "./components/Topnav";
import Content from "./components/Content";



export default class App extends React.Component {

  render() {
    return (
      <div>
        <Menu />
        <Topnav />
        {/* <Content /> */}
        <Footersection />
      </div>

    )
  }

}
