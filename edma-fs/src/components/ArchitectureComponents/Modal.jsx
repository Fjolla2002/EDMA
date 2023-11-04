import React, { useState } from 'react';
import './modal.scss';

const Modal = ({ images, closeModal }) => {
  const [image, setImage] = useState(0);

  const nextImage = () => {
    setImage((prev) =>
      prev < images.length - 1 ? prev + 1 : 0
    );
  };

  const prevImage = () => {
    setImage((prev) =>
      prev > 0 ? prev - 1 : images.length - 1
    );
  };

  return (
    <div className="modal">
      <span className="wrapper" onClick={() => closeModal()} />
      <div className="content">
        <button className="close" onClick={() => closeModal()}>X</button>
        <div className="image-container">
          <img src={images[image].image} alt="" />
        </div>
        <div className="image-navigation">
          <button onClick={() => prevImage()}>&lt;</button>
          <button onClick={() => nextImage()}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
