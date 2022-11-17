import React from "react";
import { Form, Input, Button, Select } from "antd";
import { Upload } from "antd";
import PropTypes from "prop-types";
import "./index.scss";
import { Link } from "react-router-dom";
import { TreeSelect } from "antd";
import { useState } from "react";
import { useEffect } from "react";

// import { useEffect } from 'react';
const { Option } = Select;

export const FormComponent = ({tProps,uploadButton,setDataToLocalStorage,reSettingLocalStorageData,beforeUpload,handleChange,normFile,imageUrl,selectBefore,}) => 
{
  let recievedCardData = localStorage.getItem("cardData");
  let parsedReceivedData = JSON.parse(recievedCardData);


   let [state,setState] = useState({
    isAdd:true,
    isEdit:false
   })


  let [defaultValue, setDefaultValue] = useState(
  

    {
    orgName: "",
    email: "",
    domain: "",
    service: "",
    phone: "",
    city: "",
    state: "",
    address: "",
    admin: "",
  });
  //  setDefaultValue({email:'adi@gmail.com'})
 

  useEffect (() =>{
    if(window.location.href === 'http://localhost:3000/organisation/add'){
      setDefaultValue({
        orgName: "",
        email: "",
        domain: "",
        service: "",
        phone: "",
        city: "",
        state: "",
        address: "",
        admin: "",
      })

      setState({
        isAdd:true,
       
      })
    }
    else{
        setDefaultValue(parsedReceivedData)
        setState({
        isAdd:false})
    }
  },[])


  // let admin = ['sasi','kishore','nazma']

  // let adminOptions = [];
  // for(i =0, i <adminOptions.length(), i++){
  //   adminOptions.push(value = i)
  // }

  return (
    <div>
      
      <Form
        key={defaultValue.orgName}
        getValueFromEvent={normFile}
        autoComplete="on"
        onFinish={(values) => {
          state.isAdd === true ?  setDataToLocalStorage(values):reSettingLocalStorageData(values)
    }}
        
      >
        <div className="form-bg-container">
          <div className="add-logo-container">
            <Form.Item
              name="logo"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                showUploadList={false}
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" className="image-width" />
                ) : (
                  uploadButton
                )}
              </Upload>
            </Form.Item>
          </div>

          <div className="first-column">
            <Form.Item
              name="orgName"
              label="Organisation Name"
              className="line-height"
              rules={[
                {
                  // required: true,
                  message: "Please enter Organisation name",
                },
                { whitespace: true },
                { min: 3 },
              ]}
            >
              <input
                defaultValue={defaultValue.orgName}
                placeholder="Enter Organisation Name"
                size="medium"
                className="input"
              />
            </Form.Item>

            <Form.Item className="line-height" label="Phone" name="phone">
              <Input
                addonBefore={selectBefore}
                defaultValue={defaultValue.phone}
                className="p"
                size="medium"
              />
            </Form.Item>

            <Form.Item
              name="city"
              label="City"
              className="line-height"
              rules={[
                {
                  // required: true,
                  message: "Type your city name",
                },
                { whitespace: true },
                { min: 3 },
              ]}
            >
              <Input
                defaultValue={defaultValue.city}
                placeholder="Type your City Name"
                className="p"
                size="medium"
              />
            </Form.Item>

            <Form.Item label="Admin" name="admin">
             {/* {
               admin.forEach((each) =>{
                <Select size="medium" defaultValue={defaultValue.admin}>
                  <Select.Option value={each}>{each}</Select.Option>
                </Select>
               })
             } */}
              <Select size="medium" defaultValue={defaultValue.admin}>
                <Option value="sasi">Sasi</Option>
                <Option value="kishore">Kishore</Option>
                <Option value="Nazma">Nazma</Option>
                <Option value="sasi"></Option>
              </Select>
            </Form.Item>
            <Form.Item label="Domain" name="domain">
              <Select
                defaultValue={defaultValue.domain}
                size="medium"
                style={{
                  height: "0%",
                }}
              >
                <Option value="Finance Service">Finance Service</Option>
                <Option value="IT Service">IT Service</Option>
                <Option value="Auto Mobiles">Auto Mobiles</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="second-column">
            <Form.Item
              label="Services"
              name="service"
              rules={[
                {
                  // required: true,
                  // message: "Please enter Services",
                },
                { whitespace: true },
                { min: 2 },
              ]}
            >
              <TreeSelect {...tProps} size="medium" />
            </Form.Item>
            {/* email */}
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  // required: true,
                  message: "Please enter your email",
                },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <input
                placeholder="Type your email"
                size="medium"
                defaultValue={defaultValue.email}
              />
            </Form.Item>

            {/* state */}
            <Form.Item label="State" name="state" key={defaultValue.email}>
              <Select
                defaultValue={defaultValue.state}
                size="medium"
                style={{
                  height: "0%",
                }}
              >
                <Option value="Andhrapradesh">Andhrapradesh</Option>
                <Option value="Tamilnadu">Tamilnadu</Option>
              </Select>
            </Form.Item>

            {/* Address */}
            <Form.Item
              name="Address"
              label="Address"
              rules={[
                {
                  // required: true,
                  message: "Please enter Address",
                },
                { whitespace: true },
                { min: 3 },
              ]}
            >
              <Input
                placeholder="Type your Address"
                size="medium"
                defaultValue={defaultValue.address}
              />
            </Form.Item>
          </div>
        </div>

        <div className="save-btn-container">
          <Link to="/organisation">
            <Form.Item>
              <Button className="cancel-btn" htmlType="submit">
                cancel
              </Button>
            </Form.Item>
          </Link>

          <Form.Item>
            <Button className="save-btn" htmlType="submit" onClick={() =>{
              window.location.href = "/organisation";
            }}>
              Save
            </Button>
          </Form.Item>
        </div>
      </Form>
      
    </div>
  );
};

FormComponent.propTypes = {
  normFile: PropTypes.func,
  handleChange: PropTypes.func,
  beforeUpload: PropTypes.func,
  tProps: PropTypes.func,
  uploadButton: PropTypes.func,
  selectBefore: PropTypes.object,
  setDataToLocalStorage: PropTypes.func,
  imageUrl: PropTypes.string,
  defaultValue: PropTypes.object,
  reSettingLocalStorageData:PropTypes.func,
};
