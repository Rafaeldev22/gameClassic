import React from "react";
import './Modal.css'


const Modal = ({ show, onClose, videoSrc, name }) => {
    if (!show) {
      return null;
    }

    return (
      <div className="modal-backdrop">
        <div className="modal-content">
          <button onClick={onClose} className="modal-close-button">X</button>
          <div className="modal-video">
            <h3>{name}</h3>
            <iframe
              width="600"
              height="355"
              src={videoSrc}
              title={name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  };

  export default Modal;
