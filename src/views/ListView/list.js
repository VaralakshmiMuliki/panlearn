import React from "react";
import { Table } from "antd";
// import { PaginationForOrganization } from "../PaginationForOrganization";
import "./list.scss";
import { ContentHeader1} from '../../Components/contentHeader/contentHeader1'
// import { useState } from "react";
// import { useEffect } from "react";


let dataFromStorage= localStorage.getItem("dataInLocalstorage");
let parsedDataFromLocalStorage = JSON.parse(dataFromStorage);

const columns = [
  {
    title: "Name",
    
    dataIndex: "orgName",
    key: "name",
    render: (t, r) => {
      return (
        <div className="org-name-container">
          <img width="8%" alt="" src={r.logo} />
          <p className="org-name">{r.orgName}</p>
        </div>
      );
    },
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "age",
  },
  {
    title: "Domain",
    dataIndex: "domain",
    key: "address",
  },
  {
    title:'Status',
    dataIndex:'status',
    key:'status',
    render:(data) => (
     <div style ={{width:'20px' , borderRadius:'50%',  height:"20px", background: data ? "green" : "red" }}></div>
    )
  }
];



export const ListView = () => {
  // const [page, setpage]= useState(1)
  // const [filterData, setFilterData]= useState()
  // const pageSize = 9
  // useEffect (() => {
  //     const pageNumber = (page - 1)*pageSize
  //     console.log(pageNumber)
  //     const filterArray = parsedDataFromLocalStorage.slice(pageNumber,pageNumber+pageSize)
  //       setFilterData(filterArray)

  //     },[page])
  
  return (
    <div>
      <ContentHeader1/>
      <Table dataSource={parsedDataFromLocalStorage} columns={columns} pagination={false} />;
      {/* <PaginationForOrganization setpage={setpage} pagesize={pageSize}/> */}
    </div>
  );
};
