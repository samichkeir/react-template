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
  
    const fetchData = async (page = 1, size = perPage) => {
      setLoading(true);
  
      const response = await axios.get(
        `${props.url}?page=${page}&per_page=${size}&delay=1`
      );
  
      setData(response.data.data);
      setTotalRows(response.data.total);
      setLoading(false);
    };
  
   
    useEffect(() => {
      fetchData(1);
    }, [props.count]);

    const columns = useMemo(
      () => props.cols,
      [...props.colsMemo]
    );
  
    const handlePageChange = (page: number ) => {
      fetchData(page);
      setCurrentPage(page);
    };
  
    const handlePerRowsChange = async (newPerPage: number, page: number) => {
      fetchData(page, newPerPage);
      setPerPage(newPerPage);
    };

    
    return (
      <DataTable
        title={props.title}
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


