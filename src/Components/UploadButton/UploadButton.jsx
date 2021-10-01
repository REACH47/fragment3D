import React, { useState } from "react";
import UploadModal from "../UploadModal/UploadModal";
import useModal from "../../Hooks/useModal";
import "../UploadButton/UploadButton.scss";

function UploadButton() {
  const { toggle, visible } = useModal();

  return (
    <>
      <div className="upload-container">
        <button className="upload-button" onClick={toggle}>
          Upload
        </button>
      </div>
      <UploadModal visible={visible} toggle={toggle} />
    </>
  );
}

export default UploadButton;
