import React from "react";
import Profile from "./Profile";
import myRoutes from '../../routers/Router'
import MenuSection from "./MenuSection";

export default class Menu extends React.Component {
  state = {
    allRoutes: [{
      path: '',
      name: '',
      icon: ''
    }
    ]
  }
  renderMenuScript() {
    const script = document.createElement("script");
    script.src = "/js/menu.js";
    script.async = true;
    document.body.appendChild(script);
  }

  componentDidMount() {
    this.renderMenuScript();
  }

  render() {
    return (
      <div className="col-md-3 left_col">
        <div className="left_col scroll-view">
          <div className="navbar nav_title" >
            <a href="#" className="site_title"><i className="fa fa-paw"></i> <span>CMS</span></a>
          </div>

          <div className="clearfix"></div>
          <Profile username="Sami" logo="images/img.jpg" />

          <br />
          <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
            <div className="menu_section">
              <ul className="nav side-menu">
                {myRoutes.map((item, index) => {
                  return <MenuSection key={index}  {...item} />
                    ;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}