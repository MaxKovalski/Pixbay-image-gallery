import React from "react";
import "./ImageModal.css";

function ImageModal({ isOpen, onClose, image }) {
  // Close modal if not open or if overlay is clicked
  if (!isOpen) return null;
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  // render the modal
  return (
    <div className="modal-container" onClick={handleOverlayClick}>
      <div className="modal-content">
        <img src={image.largeImageURL} alt={image.tags} />
        <div className="image-details">
          <p>
            <strong>Views:</strong> {image.views}
          </p>
          <p>
            <strong>Downloads:</strong> {image.downloads}
          </p>
          <p>
            <strong>Collections:</strong> {image.collections}
          </p>
          <p>
            <strong>Tags:</strong> {image.tags}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
