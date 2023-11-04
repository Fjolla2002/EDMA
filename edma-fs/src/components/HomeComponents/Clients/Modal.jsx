import React from 'react';
import './modal.scss'
import { NavLink } from 'react-router-dom';

const Modal = ({logo, name, desc, path, closeModal}) => {
  return (
    <div className='modal'>
        <span className='wrapper' onClick={() => closeModal()}/>
        <div className='content'>
            <button className='close' onClick={() => closeModal()}>X</button>
            <NavLink to={path} target='_blank'>
                <img src={logo} alt={name} />
            </NavLink>
            <h4>{name}</h4>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default Modal