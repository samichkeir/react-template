import React from "react";
import Table from "../../components/Table/Table";

export default class Users extends React.Component {
    constructor(props: any) {
        super(props);
    }

    state = {
        refreshCount: 0
    }
    render() {
        const handleDelete = (row: any) => () => {
            this.setState({refreshCount: this.state.refreshCount + 1})
        };
        const columns = [
            {
                name: "First Name",
                selector: (row: any) => row.first_name,
                sortable: true
            },
            {
                name: "Last Name",
                selector: (row: any) => row.last_name,
                sortable: true
            },
            {
                name: "Email",
                selector: (row: any) => row.email,
                sortable: true
            },
            {
                cell: (row: any) => <button onClick={handleDelete(row)}>Delete</button>
            }
        ];
        return (
            <Table title="Users" url="https://reqres.in/api/users" cols={columns} colsMemo={[handleDelete]} count={this.state.refreshCount} />
        );
    }
}