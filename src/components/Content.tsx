import React from "react";
import { Routes, Route } from 'react-router-dom';
import MyRoutes from "../routers/MyRoutes";

export default class Content extends React.Component {
  render(): React.ReactNode {
      return(
        <div className="right_col" role="main">
         <MyRoutes />
        </div>
      )
  }
}