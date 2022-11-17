import React from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Input, Typography, Button, Space, Dropdown, Menu } from "antd";
import { AppstoreOutlined, UnorderedListOutlined } from "@ant-design/icons";
import "./header.scss";
import { Link } from "react-router-dom";


const { Text } = Typography;
const { Search } = Input;
const onSearch = (value) => console.log(value);
// const {url} = useRouteMatch();
export const ContentHeader2 = () => {
  const handleMenuClick = (e) => {
    console.log("click", e);
    // message.info("Click on menu item.");
  };
  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "1st menu item",
          key: "1",
          icon: <UserOutlined />,
        },
        {
          label: "2nd menu item",
          key: "2",
          icon: <UserOutlined />,
        },
        {
          label: "3rd menu item",
          key: "3",
          icon: <UserOutlined />,
        },
      ]}
    />

  );
  return (
    <div className="content-header">
       <Text className="content-title">Organisations</Text>
              <Space>
                <Search
                  placeholder="input search text"
                  onSearch={onSearch}
                  className="search-box"
                />
                <Link to="/organisation">
                  <AppstoreOutlined className="grid-icon-2" />
                </Link>
                <Link to="/organisation/list">
                  <UnorderedListOutlined className="list-icon-2" />
                </Link>
                <Dropdown overlay={menu}>
                  <Button>
                    <Space>
                      Sort By
                      <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
                <Link to={`${window.location.pathname}/add`}>
                
                  
                  <Button type="primary" className="add-org-button" >
                    Add Organisation
                   
                  </Button>
                </Link>
              </Space>
           
          
      
    
    </div>
  );
};
