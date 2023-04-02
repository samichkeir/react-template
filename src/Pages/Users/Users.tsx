import React from "react";
import Table from "../../components/Table/Table";

export default class Users extends React.Component {
   
    render(){
        return (
            <Table  url="https://reqres.in/api/users"/>
        );
    }
}