import React, { useEffect, useState } from "react";
import "./GridView.scss";
import { PaginationForOrganization } from "../PaginationForOrganization";
import { Card, List, Avatar } from "antd";
// import { useRouteMatch } from "react-router-dom";
import { useHistory, useRouteMatch } from "react-router-dom";
const { Meta } = Card;

export const GridComponent = () => {
  let {url}=useRouteMatch();
  const history = useHistory();
  const [page, setpage]= useState(1)
  const [filterData, setFilterData]= useState()
  const pageSize = 9
  useEffect (() => {
      const pageNumber = (page - 1)*pageSize
      const filterArray = parsedDataFromLocalStorage.slice(pageNumber,pageNumber+pageSize)
        setFilterData(filterArray)

      },[page])

  /// setting data into local storage
  let dataFromStorage = localStorage.getItem("dataInLocalstorage");
  let parsedDataFromLocalStorage = JSON.parse(dataFromStorage);


  function moveToEditForm(value, i) {
    // let getIndex = parsedDataFromLocalStorage.findIndex(function (eachCard) {
    //   let eachCardId = "card" + eachCard.uniqueNumber;
    //   console.log("eachcardId", eachCardId);
    //   console.log("myCardId", parsedDataFromLocalStorage[i].myId);
    //   if (eachCardId === parsedDataFromLocalStorage[i].uniqueNumber) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });


    let cardDataObj = {
      getIndex: i,
      orgName: value.orgName,
      email: value.email,
      admin: value.admin,
      logo: value.logo,
      phone: value.phone,
      state: value.state,
      city: value.city,
      domain: value.domain,
      address: value.address,
    };


    localStorage.setItem("cardData", JSON.stringify(cardDataObj));
    
    // myUrl = new URL(window.location.host + window.location.pathname);
    // myUrl.searchParams.append("id",i)
    history.push(`${url}/edit?id=${i}`);
    console.log(url)
   
  }



  return (
    <div>
      <div>
        <List
          itemLayout="horizontal"
          grid={{ column: 3 }}
          dataSource={filterData}
          renderItem={(item, i) => (
            <List.Item>
             
                <Card
                  className="card-bg"
                  hoverable={true}
                  onClick={() => {
                    
                    moveToEditForm(item, i);
                    // history.push(`/edit/${i+1}`)
                    
                  }}
                >
                  <Meta
                    avatar={<Avatar className="card-logo" src={item.logo} />}
                    title={<h1 className="org-name-title">{item.orgName}</h1>}
                    description={[
                      <div key={item.id}>
                        <p>{item.domain}</p>
                        <p>{item.email}</p>
                      </div>,
                    ]}
                  />
                </Card>
             
            </List.Item>
          )}
        />
      </div>

      <PaginationForOrganization setpage={setpage} pagesize={pageSize}/>
    </div>
  );
};
