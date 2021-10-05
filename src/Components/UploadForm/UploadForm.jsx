import React, { useState } from "react";
import "./UploadForm.scss";

/**
 * @TODO Wrap the form inside a slide up modal.
 * @returns JSX form component with one file input and one text input as the title.
 */
function UploadForm() {
    const [file, setfile] = useState(null);

    /**
     * @TODO Save file to local storage and save url to the file to a json file.
     * @param {*} event
     */
    const uploadFile = (event) => {
        // prevent page from refreshing
        event.preventDefault();

        // Create blob from file if file is not null
        // Blob will live in the browser storage
        // the URL to the file is logged to the console
        if (file) {
            const blob = new Blob([file], { type: "obj" });
            const blobUrl = URL.createObjectURL(blob);

            console.log(
                "Your file sits here in your browser storage: ",
                blobUrl
            );
        }
    };

    return (
        <form
            action=""
            className="upload-form"
            onSubmit={(event) => uploadFile(event)}
        >
            <h2 htmlFor="">Upload 3D model</h2>
            <label htmlFor="fileInput" className="label__file-input">
                Select a .obj file to upload
            </label>
            <input
                type="file"
                onChange={(event) => {
                    setfile(event.target.files[0]);
                }}
            />
            <label htmlFor="modelTitle" className="label__file-title">
                3D Model title
            </label>
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
