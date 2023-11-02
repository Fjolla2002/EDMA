import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = ({path, name}) => {
  return (
    <NavLink to={path} >
        {name}
    </NavLink>
  )
}

export default Menu