import React from 'react';
import {NavLink} from 'react-router-dom';
import './menu.scss';

const Menu = ({path, name}) => {
  return (
    <NavLink to={path} >
        {name}
    </NavLink>
  )
}

export default Menu