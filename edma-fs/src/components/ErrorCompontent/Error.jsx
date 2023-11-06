import React, { useContext } from 'react';
import { Context } from '../../Context/Language';
import {NavLink} from 'react-router-dom';
import { data } from '../../assets/data/dummydata';
import './error.scss';

const Error = () => {
    const [{lang}] = useContext(Context);
  return (
    <div className='error'>
       <div className='container'>
            <div className='error-content'>
                    <h1>{data[lang].errorPage.title}</h1>
                    <p>{data[lang].errorPage.text}</p>
                    <NavLink to={data[lang].errorPage.btnLink}>
                        {data[lang].errorPage.btnText}
                    </NavLink>
            </div>
       </div>
    </div>
  )
}

export default Error