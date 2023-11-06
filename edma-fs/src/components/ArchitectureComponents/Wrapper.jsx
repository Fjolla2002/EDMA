import React, { useContext, useState } from 'react';
import { data } from '../../assets/data/dummydata';
import { Context } from '../../Context/Language';
import ContentContainer from '../ContentContainer/ContentContainer';
import Modal from './Modal'; 
import './wrapper.scss';

const Wrapper = () => {
  const [{ lang }] = useContext(Context);
  const [isModalOpen, setModalOpen] = useState(false);
  const [projectImages, setProjectImages] = useState([]);

  const openModal = (images) => {
    setProjectImages(images);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="wrapper">
      <div className="container">
        {data[lang].architecturePage.map((el) => (
          <ContentContainer
            key={el.title}
            sectionTitle={el.title}
            sectionDesc={el.desc}
            btnText={el.btnText}
            afterLine={true}
            onClick={() => openModal(el.images)} 
          />
        ))}
      </div>
      {isModalOpen && <Modal images={projectImages} closeModal={closeModal} />}
    </div>
  );
};

export default Wrapper;
