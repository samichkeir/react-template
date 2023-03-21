import React from "react";
import { Link } from "react-router-dom";
import OneRoute from "../../interfaces/OneRoute";

export default class MenuSection extends React.Component<OneRoute>
{
    hasChildren;
    hasPath;
    constructor(props: OneRoute) {
        super(props);
        this.hasChildren = this.props.children ?? [];
        this.hasPath = this.props.path ? true : false;
    }
    drawChilds() {

    }
    render() {
        let child = this.hasChildren;
        let path: string = this.props.path ?? '';
        return (
            <li>
                {path != '' ? (<Link to={path} ><i className={this.props.icon}></i> {this.props.name}</Link >) :
                    (
                        <>
                            <a  ><i className={this.props.icon}></i> {this.props.name} {this.hasChildren.length > 0 ? (<span className="fa fa-chevron-down"></span>) : ''}</a >
                            <ul className="nav child_menu">
                                {child.map((menu, index) => {
                                    let path: string = menu.path ?? '';
                                    return (
                                        <li key={index}><Link to={path}>{menu.name}</Link></li>
                                    );
                                })}
                            </ul>
                        </>
                    )
                }

            </li >
        )
    }

}