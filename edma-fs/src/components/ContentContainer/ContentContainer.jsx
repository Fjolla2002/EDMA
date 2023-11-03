import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import {NavLink} from 'react-router-dom';
import './content.scss';

const ContentContainer = ({data}) => {
  return (
    <div className='content'>
        <SectionTitle title={data.sectionTitle} beforeLine={true}/>
        <h3 className='subtitle'>{data.sectionSubTitle}</h3>
        <p className='desc'>{data.sectionDesc}</p>
        {data.btnLink ? (
            <NavLink to={data.btnLink}>
                <button className='red-btn'>
                    {data.btnText}
                </button>
            </NavLink>
        ): (
            <button className='red-btn'>
                {data.btnText}
            </button>
        )}
    </div>
  )
}

export default ContentContainer