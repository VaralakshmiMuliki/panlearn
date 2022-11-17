import React from "react";
import { TreeSelect } from "antd";
import { Select } from "antd";
import { useState } from "react";
import { FormComponent } from "../../Components/FormComponent/formComponent";
import { message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

import { SettingOutlined } from "@ant-design/icons";
const { SHOW_PARENT } = TreeSelect;

// To Select Services
const { Option } = Select;
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

export const EditOrganisationComponent = () => {
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  // For country Selection
  const selectBefore = (
    <Select defaultValue="" className="select-before">
      <Option value="">
        <img src="images/flag.png" width="50%" alt="" />
      </Option>
      <Option value="">
        <SettingOutlined />
      </Option>
    </Select>
  );

  // multi select (services)
  const [multiSelectValue, setMultiSelectValue] = useState([]);
  const onChange = (newMultiSelectValue) => {
    console.log("onChange ", multiSelectValue);
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
  let { imageUrl } = state;

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

  
  return (
    <>
    <h2>Edit Organisation</h2>
      <FormComponent
        tProps={tProps}
        uploadButton={uploadButton}
        // reSettingLocalStorageData={reSettingLocalStorageData}
        beforeUpload={beforeUpload}
        handleChange={handleChange}
        normFile={normFile}
        imageUrl={imageUrl}
        selectBefore={selectBefore}
      />
    </>
  );
};
