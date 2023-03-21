import React from "react";
import { Routes, Route } from 'react-router-dom';
import myRoutes from './Router'

export default class MyRoutes extends React.Component {

  state = {
    allRoutes: [{
      path: '',
      element:''
    }
    ]
  }

  renderMenuScript() {
    let routerArray: any[] = [];
    for (let i = 0; i < myRoutes.length; i++) {
      if ('path' in myRoutes[i]) {
        routerArray.push({ path: myRoutes[i].path ?? '', element: myRoutes[i].element ?? '' });
      }
      else if (myRoutes[i].children != undefined) {
        let childs = myRoutes[i].children ?? [];
        childs.forEach(element => {
          routerArray.push({ path: element.path ?? '', element: element.element ?? '' });
        });
      }
    }
    this.setState({
      allRoutes: routerArray
    })
  }

  componentDidMount() {
    this.renderMenuScript();
  }
  
  render(): React.ReactNode {
    return (
      <Routes>
      {this.state.allRoutes.map((item) => {
         return (
             <Route  key="{item.path}" path={item.path} element={item.element}/>
         );
       })}
       </Routes>
    )
  }
}