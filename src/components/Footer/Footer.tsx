import React from "react";

export default class Footersection extends React.Component {
   
    render(){
        return (
            <footer>
            <div className="pull-right">
              CMS Template {(new Date()).getFullYear()}
            </div>
            <div className="clearfix"></div>
          </footer>
        );
    }
}