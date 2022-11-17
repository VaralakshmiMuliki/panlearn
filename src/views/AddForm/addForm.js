// import React from "react";
// import { Form, Input, Button, Select } from "antd";
// import { SettingOutlined } from "@ant-design/icons";
// import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
// import { message, Upload } from "antd";
// import "./form.scss";
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

// export const FormComponent = () => {
//   function getBase64(img, callback) {
//     const reader = new FileReader();
//     reader.addEventListener("load", () => callback(reader.result));
//     reader.readAsDataURL(img);
//   }

//   // For country Selection
//   const selectBefore = (
//     <Select defaultValue="" className="select-before">
//       <Option>
//         <img src="images/flag.png" width="50%" alt="" />
//       </Option>
//       <Option value="https://">
//         <SettingOutlined />
//       </Option>
//     </Select>
//   );

  

//   // to select services

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
//   const { imageUrl } = state;
  
//   const uploadButton = (
//     <div>
//       {imageUrl ? <LoadingOutlined /> : <PlusOutlined />}
//       <div
//         style={{
//           marginTop: 8,
//         }}
//       >
//         Upload
//       </div>
//     </div>
//   );
//   //  const [isData,setIsData] = useState();

//   const setDataToLocalStorage = (values) => {
//     let data;
//     let stringifiedValue = localStorage.getItem("dataInLocalstorage");
//     let parsedValue = JSON.parse(stringifiedValue);
//     if (parsedValue === null){
//       data=[]
//     } else{
//       data=parsedValue
//     }

//     values.logo = imageUrl;
//     // const data = parsedValue;
//     let cardsCount = data.length;
//     cardsCount = cardsCount + 1;
//     let cardId = "card" + cardsCount;

//     const obj1 = {
//       myId: cardId,
//       uniqueNumber: cardsCount,
//       logo: values.logo,
//       orgName: values.orgName,
//       service: values.services,
//       email: values.email,
//       address: values.Address,
//       state: values.state,
//       phone: values.phone,
//       city: values.city,
//       admin: values.admin,
//       domain: values.domain,
//     };
//     data.push(obj1);
//     localStorage.setItem("dataInLocalstorage", JSON.stringify(data));
//   };

//   return (
//     <Form
//       getValueFromEvent={normFile}
//       autoComplete="on"
//       onFinish={(values) => {
//         setDataToLocalStorage(values);
//         window.location.href = '/'
//         console.log("values are here ", values);
//       }}
//       onFinishFailed={(error) => {
//         console.log({ error });
//       }}
//     >
//       <div className="form-bg-container">
//         <div className="add-logo-container">
//           <Form.Item
//             name="logo"
//             valuePropName="fileList"
//             getValueFromEvent={normFile}
//           >
//             <Upload
//               name="avatar"
//               listType="picture-card"
//               className="avatar-uploader"
//               showUploadList={false}

//               beforeUpload={beforeUpload}
//               onChange={handleChange}
//             >
//               {imageUrl ? (
//                 <img
//                   src={imageUrl}
//                   alt="avatar"
//                   style={{
//                     width: "100%",
//                   }}
//                 />
//               ) : (
//                 uploadButton
//               )}
//             </Upload>
//           </Form.Item>
//         </div>

//         <div className="first-column">
//           <Form.Item
//             name="orgName"
//             label="Organisation Name"
//             className="line-height"
//             rules={[
//               {
//                 required: true,
//                 message: "Please enter Organisation name",
//               },
//               { whitespace: true },
//               { min: 3 },
//             ]}
//           >
//             <Input
//               placeholder="Type your Organisation Name"
//               size="medium"
//               value=""
//             />
//           </Form.Item>

//           <Form.Item className="line-height" label="Phone" name="phone">
//             <Input
//               addonBefore={selectBefore}
//               defaultValue="mysite"
//               className="p"
//               size="medium"
//             />
//           </Form.Item>

//           <Form.Item
//             name="city"
//             label="City"
//             className="line-height"
//             rules={[
//               {
//                 // required: true,
//                 message: "Type your city name",
//               },
//               { whitespace: true },
//               { min: 3 },
//             ]}
//           >
//             <Input
//               placeholder="Type your City Name"
//               className="p"
//               size="medium"
//             />
//           </Form.Item>

//           <Form.Item label="Admin" name="admin">
//             <Select
//               size="medium"
//               defaultValue="Nazma"
//               style={
//                 {
//                   // width: '30%',
//                 }
//               }
//             >
//               <Option value="sasi">Sasi</Option>
//               <Option value="kishore">Kishore</Option>
//               <Option value="Nazma">Nazma</Option>
//               <Option value="sasi"></Option>
//             </Select>
//           </Form.Item>
//           <Form.Item label="Domain" name="domain">
//             <Select
//               defaultValue="Sales"
//               size="medium"
//               style={{
//                 height: "0%",
//               }}
//             >
//               <Option value="Finance Service">Finance Service</Option>
//               <Option value="IT Service">IT Service</Option>
//               <Option value="Auto Mobiles">Auto Mobiles</Option>
//               <Option value="Finance">Finance</Option>
//               <Option value="Online Booking">Online Booking</Option>
//               <Option value="Ecommerce">Ecommerce</Option>
//               <Option value="Marketing">Marketing</Option>
//               <Option value="Sales">Sales</Option>
//               <Option value="Hospitality">Hospitality</Option>
//               <Option value="HealthCare">HealthCare</Option>
//               <Option value="Construction Service">Construction Service</Option>
//             </Select>
//           </Form.Item>
//         </div>
//         <div className="second-column">
          
//           <Form.Item
//             label="Services"
//             name="service"
//             rules={[
//               {
//                 // required: true,
//                 // message: "Please enter Services",
//               },
//               { whitespace: true },
//               { min: 2 },
//             ]}
//           >
//             <TreeSelect {...tProps} size="medium" />
//           </Form.Item>
//           {/* email */}
//           <Form.Item
//             name="email"
//             label="Email"
//             rules={[
//               {
//                 required: true,
//                 message: "Please enter your email",
//               },
//               { type: "email", message: "Please enter a valid email" },
//             ]}
//           >
//             <Input placeholder="Type your email" size="medium" />
//           </Form.Item>

//           {/* state */}
//           <Form.Item label="State" name="state">
//             <Select
//               defaultValue="State"
//               size="medium"
//               style={{
//                 height: "0%",
//               }}
//             >
//               <Option value="Andhrapradesh">Andhrapradesh</Option>
//               <Option value="Tamilnadu">Tamilnadu</Option>
//               <Option value="Karnataka">Karnataka</Option>
//               <Option value="Assam">Assam</Option>
//               <Option value="Meghalaya">Meghalaya</Option>
//               <Option value="Telangana">Telangana</Option>
//               <Option value="Kerala">Kerala</Option>
//               <Option value="Gujarat">Gujarat</Option>
//             </Select>
//           </Form.Item>

//           {/* Address */}
//           <Form.Item
//             name="Address"
//             label="Address"
//             rules={[
//               {
//                 // required: true,
//                 message: "Please enter Address",
//               },
//               { whitespace: true },
//               { min: 3 },
//             ]}
//           >
//             <Input placeholder="Type your Address" size="medium" />
//           </Form.Item>
//         </div>
//       </div>

//       <div className="save-btn-container">
//         <Link to="/">
//           <Form.Item>
//             <Button className="cancel-btn" htmlType="submit">
//               cancel
//             </Button>
//           </Form.Item>
//         </Link>

//         <Form.Item>
//           <Button className="save-btn" htmlType="submit">
//             Save
//           </Button>
//         </Form.Item>
//       </div>
//     </Form>
//   );
// };
