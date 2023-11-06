import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import {NavLink} from 'react-router-dom';
import './content.scss';

const ContentContainer = ({sectionTitle, sectionSubTitle, sectionDesc, btnLink, btnText, afterLine, onClick}) => {
    const subtitleStyle = sectionSubTitle ? { marginTop: '18px', marginBottom: '18px' } : {};
  return (
    <div className='content'>
        <SectionTitle title={sectionTitle} beforeLine={true} afterLine={afterLine}/>
        <h3 className='subtitle' style={subtitleStyle}>{sectionSubTitle}</h3>
        <p className='desc'>{sectionDesc}</p>
        {btnText ? (
            btnLink ? (
                <NavLink to={btnLink}>
                    <button className='red-btn'>
                        {btnText}
                    </button>
                </NavLink>
            ): (
                <button className='red-btn' onClick={onClick}>
                    {btnText}
                </button>
            )
        ): (
            <></>
        )}
    </div>
  )
}

export default ContentContainer