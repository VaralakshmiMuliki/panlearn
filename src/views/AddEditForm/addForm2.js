import React from "react";
import { SettingOutlined } from "@ant-design/icons";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Select } from "antd";


import { TreeSelect } from "antd";
import { useState } from "react";
import { FormComponent } from "../../Components/FormComponent/formComponent";
const { Option } = Select;
const { SHOW_PARENT } = TreeSelect;

// To Select Services

const treeData = [
  {
    title: "AIMS",
    value: "AIMS",
    key: "AIMS",
  },
  {
    title: "AP",
    value: "AP",
    key: "AP",
  },
  {
    title: "LMS",
    value: "LMS",
    key: "LMS",
  },
  {
    title: "HRMS",
    value: "HRMS",
    key: "HRMS",
  },
  {
    title: "EP",
    value: "EP",
    key: "EP",
  },
  {
    title: "CMS",
    value: "CMS",
    key: "CMS",
  },
  {
    title: "LXP",
    value: "LXP",
    key: "LXP",
  },
];

//  To upload image

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

export const AddOrganisationComponent = () => {
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  // For country Selection
  const selectBefore = (
    <Select defaultValue="" className="select-before">
      <Option>
        <img src="images/flag.png" width="50%" alt="" />
      </Option>
      <Option value="https://">
        <SettingOutlined />
      </Option>
    </Select>
  );

  // to select services

  const [multiSelectValue, setMultiSelectValue] = useState([]);
  const onChange = (newMultiSelectValue) => {
    setMultiSelectValue(newMultiSelectValue);
  };
  const tProps = {
    treeData,
    multiSelectValue,
    onChange,
    defaultValue: ["AIMS", "AP", "LMS"],
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: "Please select",
    style: {
      width: "100%",
    },
  };
  // To Upload Image

  const [state, setState] = useState({
    loading: false,
  });
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setState({
          imageUrl,
          loading: false,
        });
      });
    }
  };
  const { imageUrl } = state;

  const uploadButton = (
    <div>
      {imageUrl ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  //  const [isData,setIsData] = useState();

  const setDataToLocalStorage = (values) => {
    let data;
    let stringifiedValue = localStorage.getItem("dataInLocalstorage");
    let parsedValue = JSON.parse(stringifiedValue);
    if (parsedValue === null) {
      data = [];
    } else {
      data = parsedValue;
    }

    values.logo = imageUrl;
    // const data = parsedValue;
    let cardsCount = data.length;
    cardsCount = cardsCount + 1;
    let cardId = "card" + cardsCount;

    const obj1 = {
      myId: cardId,
      uniqueNumber: cardsCount,
      logo: values.logo,
      orgName: values.orgName,
      service: values.services,
      email: values.email,
      address: values.Address,
      state: values.state,
      phone: values.phone,
      city: values.city,
      admin: values.admin,
      domain: values.domain,
    };
    data.push(obj1);
    localStorage.setItem("dataInLocalstorage", JSON.stringify(data));
  };
  let recievedCardData = localStorage.getItem("cardData");
  let parsedReceivedData = JSON.parse(recievedCardData);
  console.log(parsedReceivedData)
  let dataFromStorage = localStorage.getItem("dataInLocalstorage");
  let parsedDataFromLocalStorage = JSON.parse(dataFromStorage);

  
  const reSettingLocalStorageData = (values) => {
    let recievedCardData = localStorage.getItem("cardData");
  let parsedReceivedData = JSON.parse(recievedCardData);

    parsedDataFromLocalStorage[parsedReceivedData.getIndex] = values;

    localStorage.setItem(
      "dataInLocalstorage",
      JSON.stringify(parsedDataFromLocalStorage)
    );
  };

 

  return (
    <>
      <h2>Add Organisation</h2>
     <FormComponent  tProps={tProps} uploadButton={uploadButton} setDataToLocalStorage={setDataToLocalStorage} reSettingLocalStorageData={reSettingLocalStorageData}  beforeUpload={beforeUpload} handleChange={handleChange} normFile={normFile} imageUrl={imageUrl} selectBefore={selectBefore}/>
    
    
    
    </>
    
  );
};
