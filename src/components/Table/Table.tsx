import DataTable from 'react-data-table-component';
import axios from "axios";
import ReactDOM from "react-dom";
import React, { useState, useEffect, useCallback, useMemo } from "react";


export default   (props:any) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    // const [deleted, setDeleted] = useState([]);
  
    const fetchUsers = async (page = 1, size = perPage) => {
      setLoading(true);
  
      const response = await axios.get(
        `${props.url}?page=${page}&per_page=${size}&delay=1`
      );
  
      setData(response.data.data);
      setTotalRows(response.data.total);
      setLoading(false);
    };
  
    useEffect(() => {
      fetchUsers(1);
    }, []);
  
    const handleDelete = useCallback(
    (row:any) => async () => {
        console.log(row)
        await axios.delete(`${props.url}/${row.id}`);
        fetchUsers(currentPage,perPage);
      },
      [currentPage, perPage, totalRows]
    );
  
    const columns = useMemo(
      () => [
        {
          name: "First Name",
          selector: (row:any) => row.first_name ,
          sortable: true
        },
        {
          name: "Last Name",
          selector: (row:any) => row.last_name ,
          sortable: true
        },
        {
          name: "Email",
          selector: (row:any) => row.email ,
          sortable: true
        },
        {
          cell: (row:any) => <button onClick={handleDelete(row)}>Delete</button>
        }
      ],
      [handleDelete]
    );
  
    const handlePageChange = (page: number ) => {
      fetchUsers(page);
      setCurrentPage(page);
    };
  
    const handlePerRowsChange = async (newPerPage: number, page: number) => {
      fetchUsers(page, newPerPage);
      setPerPage(newPerPage);
    };
  
    return (
      <DataTable
        title="Users"
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        paginationDefaultPage={currentPage}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        selectableRows
        onSelectedRowsChange={({ selectedRows }) => console.log(selectedRows)}
      />
    );
  };


