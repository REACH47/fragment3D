import React, { useState } from "react";
import UploadModal from "../UploadModal/UploadModal";
import useModal from "../../Hooks/useModal";

function UploadButton() {
  const { toggle, visible } = useModal();

  return (
    <>
      <button onClick={toggle}>Test</button>
      <UploadModal visible={visible} toggle={toggle} />
    </>
  );
}

export default UploadButton;
