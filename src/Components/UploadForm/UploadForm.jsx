import React, { useState } from "react";
import "./UploadForm.scss";

function UploadForm() {
    const [file, setfile] = useState(null);

    const saveFile = () => {

    }

    return (
        <form action="" className="upload-form" onSubmit={saveFile}>
            <h2 htmlFor="">Upload 3D model</h2>
            <label htmlFor="fileInput" className="label__file-input">Select a .obj file to upload</label>
            <input type="file" />
            <label htmlFor="modelTitle" className="label__file-title">3D Model title</label>
            <input type="text" />
            <input
                type="submit"
                value="Upload"
                className="upload-form__submit-button"
            />
        </form>
    );
}

export default UploadForm;
