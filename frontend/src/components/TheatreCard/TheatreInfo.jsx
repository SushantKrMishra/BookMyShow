import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: "50%",
    height: "25%",
    margin: "auto",
  },
};

const TheatreInfoDialog = ({
  isOpen,
  onClose,
  theatreName,
  address,
  amenities,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Theatre Info"
      style={customStyles} // Apply custom styles
    >
      <h2> {theatreName}</h2>
      <p>Address: {address}</p>
      <p>Amenities: {amenities.join(", ")}</p>
    </Modal>
  );
};

export default TheatreInfoDialog;
