import React from "react";
import ReactDOM from "react-dom";
import "../UploadModal/UploadModal.scss";

function UploadModal({ visible, toggle }) {
  return visible
    ? ReactDOM.createPortal(
        <div className="modal">
          <div className="modal-pop" role="dialog" aria-modal="true">
            <h3>Hello World</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae veniam blanditiis obcaecati reiciendis maiores vitae
              autem earum illum libero non. Est amet optio tempore fugiat ut
              sequi sapiente tenetur saepe.
            </p>
            <button className="close-button" type="button" onClick={toggle}>
              Close
            </button>
          </div>
          <div className="modal-overlay" onClick={toggle}></div>
        </div>,
        document.body
      )
    : null;
}

export default UploadModal;
