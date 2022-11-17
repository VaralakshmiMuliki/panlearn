// import React from "react";
// import { Form, Input, Button, Select } from "antd";
// import { SettingOutlined } from "@ant-design/icons";
// // import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
// import { message, Upload } from "antd";
// import { useState } from "react";
// import { TreeSelect } from "antd";
// import { Link } from "react-router-dom";
// const { SHOW_PARENT } = TreeSelect;


// // To Select Services
// const { Option } = Select;
// const treeData = [
//   {
//     title: "AIMS",
//     value: "AIMS",
//     key: "AIMS",
//   },
//   {
//     title: "AP",
//     value: "AP",
//     key: "AP",
//   },
//   {
//     title: "LMS",
//     value: "LMS",
//     key: "LMS",
//   },
//   {
//     title: "HRMS",
//     value: "HRMS",
//     key: "HRMS",
//   },
//   {
//     title: "EP",
//     value: "EP",
//     key: "EP",
//   },
//   {
//     title: "CMS",
//     value: "CMS",
//     key: "CMS",
//   },
//   {
//     title: "LXP",
//     value: "LXP",
//     key: "LXP",
//   },
// ];

// //  To upload image

// const beforeUpload = (file) => {
//   const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
//   if (!isJpgOrPng) {
//     message.error("You can only upload JPG/PNG file!");
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error("Image must smaller than 2MB!");
//   }
//   return isJpgOrPng && isLt2M;
// };

// const normFile = (e) => {
//   console.log("Upload event:", e);

//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e && e.fileList;
// };


// export const EditForm = () => {

//   function getBase64(img, callback) {
//     const reader = new FileReader();
//     reader.addEventListener("load", () => callback(reader.result));
//     reader.readAsDataURL(img);
//   }

//   // For country Selection
//   const selectBefore = (
//     <Select defaultValue="" className="select-before">
//       <Option value="">
//         <img src="images/flag.png" width="50%" alt="" />
//       </Option>
//       <Option value="">
//         <SettingOutlined />
//       </Option>
//     </Select>
//   );

//   // multi select (services)
//   const [multiSelectValue, setMultiSelectValue] = useState([]);
//   const onChange = (newMultiSelectValue) => {
//     console.log("onChange ", multiSelectValue);
//     setMultiSelectValue(newMultiSelectValue);
//   };

//   const tProps = {
//     treeData,
//     multiSelectValue,
//     onChange,
//     defaultValue: ["AIMS", "AP", "LMS"],
//     treeCheckable: true,
//     showCheckedStrategy: SHOW_PARENT,
//     placeholder: "Please select",
//     style: {
//       width: "100%",
//     },
//   };
//   // To Upload Image

//   const [state, setState] = useState({
//     loading: false,
//   });
//   const handleChange = (info) => {
//     if (info.file.status === "uploading") {
//       setState({ loading: true });
//       return;
//     }
//     if (info.file.status === "done") {
//       // Get this url from response in real world.
//       getBase64(info.file.originFileObj, (imageUrl) => {
//         setState({
//           imageUrl,
//           loading: false,
//         });
//       });
//     }
//   };
//   let { imageUrl } = state;
 
//   // const uploadButton = (
//   //   <div>
//   //     {imageUrl ? <LoadingOutlined /> : <PlusOutlined />}
//   //     <div
//   //       style={{
//   //         marginTop: 8,
//   //       }}
//   //     >
//   //       Upload
//   //     </div>
//   //   </div>
//   // );
//   let dataFromStorage= localStorage.getItem("dataInLocalstorage");
//   let parsedDataFromLocalStorage = JSON.parse(dataFromStorage);

//   let recievedCardData = localStorage.getItem("cardData");
//   let parsedReceivedData = JSON.parse(recievedCardData);

//   const reSettingLocalStorageData = (values) => {
//     parsedDataFromLocalStorage[parsedReceivedData[0].getIndex]  = values
//     parsedDataFromLocalStorage[parsedReceivedData[0].getIndex].admin  = values.admin

//   localStorage.setItem("dataInLocalstorage",JSON.stringify(parsedDataFromLocalStorage))


 
// };
 
 

//   return (
// //     <Form
// //       getValueFromEvent={normFile}
// //       autoComplete="on"
// //       onFinish={(values) => {
// //         reSettingLocalStorageData(values);
// //         localStorage.setItem("cardData",JSON.stringify(values));
// //         window.location.href = "/";
// // }}

// //       onFinishFailed={(error) => {
// //         console.log({ error });
// //       }}
// //     >
// //       <div className="form-bg-container">
// //         <div className="add-logo-container">
         
// //           <Form.Item
// //             name="logo"
// //             valuePropName="fileList"
// //             getValueFromEvent={normFile}
// //           >
// //             <Upload
// //               name="avatar"
// //               listType="picture-card"
// //               className="avatar-uploader"
// //               showUploadList={false}
// //               action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
// //               beforeUpload={beforeUpload}
// //               onChange={handleChange}
// //             >
// //               {imageUrl ? (
// //                 <img
                
// //                   src={imageUrl}
// //                   alt="avatar"
// //                   style={{
// //                     width: "100%",
// //                   }}
// //                 />
// //               ) : (
// //                 <img
                
// //                 src={parsedReceivedData[0].logo}
// //                 alt="avatar"
// //                 style={{
// //                   width: "100%",
// //                 }}
// //               />
                
// //               )}
// //             </Upload>
// //           </Form.Item>
// //           <Form.Item>
// //             <Button className="reset-password-btn">Reset Password</Button>
// //           </Form.Item>
// //         </div>
        

// //         <div className="first-column">
// //           <Form.Item
// //             name="orgName"
// //             label="Organisation Name"
// //             className="line-height"
// //              rules={[
// //               {
// //                 // required: true,
// //                 message: "Please enter Organisation name",
// //               },
// //               { whitespace: true },
// //               { min: 3 },
// //             ]}
// //           >
// //             <Input
// //               defaultValue={parsedReceivedData[0].orgName}
// //               placeholder="Type your Organisation Name"
// //               size="medium"
// //             />
// //           </Form.Item>

// //           <Form.Item className="line-height" label="Phone" name="phone">
// //             <Input
// //               addonBefore={selectBefore}
// //               defaultValue={parsedReceivedData[0].phone}
// //               className="p"
// //               size="medium"
              
// //             />
// //           </Form.Item>

// //           <Form.Item
// //             name="city"
// //             label="City"
// //             className="line-height"
// //             rules={[
// //               {
// //                 // required: true,
// //                 message: "Type your city name",
// //               },
// //               { whitespace: true },
// //               { min: 3 },
// //             ]}
// //           >
// //             <Input
// //               placeholder="Type your City Name"
// //               className="p"
// //               defaultValue={parsedReceivedData[0].city}
// //               size="medium"
              
// //             />
// //           </Form.Item>

// //           <Form.Item label="Admin" name="admin">
// //             <Select
// //               size="medium"
// //               defaultValue={parsedReceivedData[0].admin}
              
// //             >
// //               <Option value="jack">Admin</Option>
// //               <Option value="lucy">Lucy</Option>
// //             </Select>
// //           </Form.Item>
// //           <Form.Item label="Domain" name="domain">
// //             <Select
              
// //               defaultValue={parsedReceivedData[0].domain}
// //               size="medium"
// //               style={{
// //                 height: "0%",
// //               }}
// //             >
// //              <Option value="Finance Service">Finance Service</Option>
// //               <Option value="IT Service">IT Service</Option>
// //               <Option value="Auto Mobiles">Auto Mobiles</Option>
// //               <Option value="Finance">Finance</Option>
// //               <Option value="Online Booking">Online Booking</Option>
// //               <Option value="Ecommerce">Ecommerce</Option>
// //               <Option value="Marketing">Marketing</Option>
// //               <Option value="Sales">Sales</Option>
// //               <Option value="Hospitality">Hospitality</Option>
// //               <Option value="HealthCare">HealthCare</Option>
// //               <Option value="Construction Service">Construction Service</Option>
// //             </Select>
// //           </Form.Item>
// //         </div>
// //         <div className="second-column">
// //           <Form.Item
// //             label="Services"
// //             name="service"
// //             rules={[
// //               {
// //                 // required: true,
// //                 // message: "Please enter Services",
// //               },
// //               { whitespace: true },
// //               { min: 2 },
// //             ]}
// //           >
// //             <TreeSelect {...tProps} size="medium" />
// //           </Form.Item>
// //           {/* email */}
// //           <Form.Item
// //             name="email"
// //             label="Email"
// //             rules={[
// //               {
// //                 // required: true,
// //                 message: "Please enter your email",
// //               },
// //               { type: "email", message: "Please enter a valid email" },
// //             ]}
// //           >
// //             <Input
// //               placeholder="Type your email"
// //               size="medium"
// //               defaultValue={parsedReceivedData[0].email}
// //             />
// //           </Form.Item>

// //           {/* state */}
// //           <Form.Item label="State" name="state">
// //             <Select
// //               defaultValue={parsedReceivedData[0].state}
// //               size="medium"
// //               style={{
// //                 height: "0%",
// //               }}
// //             >
// //               <Option value="Andhrapradesh">Andhrapradesh</Option>
// //               <Option value="Tamilnadu">Tamilnadu</Option>
// //               <Option value="Telangana">Telangana</Option>
// //               <Option value="Assam">Assam</Option>
// //               <Option value="Karnataka">Karnataka</Option>
// //               <Option value="Himachalpradesh">Himachalpradesh</Option>
// //               <Option value="Gujarat">Gujarat</Option>
// //               <Option value="Rajasthan">Rajasthan</Option>
// //             </Select>
// //           </Form.Item>

// //           {/* Address */}
// //           <Form.Item
// //             name="Address"
// //             label="Address"
// //             rules={[
// //               {
// //                 // required: true,
// //                 message: "Please enter Address",
// //               },
// //               { whitespace: true },
// //               { min: 3 },
// //             ]}
// //           >
// //             <Input
// //               placeholder="Type your Address"
// //               size="medium"
// //               defaultValue={parsedReceivedData[0].address}
// //             />
// //           </Form.Item>
// //         </div>
// //       </div>

// //       <div className="save-btn-container">
// //       <Link to='/'>
// //      <Form.Item>
// //           <Button className="cancel-btn" htmlType="submit" >
// //             cancel
// //           </Button>
// //         </Form.Item>
// //      </Link>

// //         <Form.Item>
// //           <Button
// //             className="save-btn"
// //             htmlType="submit"
            
// //           >
// //             Save
// //           </Button>
// //         </Form.Item>
// //       </div>
// //     </Form>
//   );
// };
