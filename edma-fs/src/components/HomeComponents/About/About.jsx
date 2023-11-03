import React, { useContext } from 'react';
import './about.scss';
import { data } from '../../../assets/data/dummydata';
import { Context } from '../../../Context/Language';
import ContentContainer from '../../ContentContainer/ContentContainer';

const About = () => {
    const [{lang}, dispatch] = useContext(Context);
    const datas = {
        sectionTitle: `${data[lang].homeAbout.title}`,
        sectionSubTitle: `${data[lang].homeAbout.subTitle}`,
        sectionDesc: `${data[lang].homeAbout.desc}`,
        btnText: `${data[lang].homeAbout.btnText}`,
        btnLink: `${data[lang].homeAbout.btnLink}`,
    }
  return (
    <div className='about'>
        <div className='container'>
            <div className='about-content'>
                <div className='left-side'>
                    <ContentContainer data={datas}/>
                </div>
                <div className='right-side'>
                    <img src={data[lang].homeAbout.aboutImg} alt="home about" />
                    <div className='number-content'>
                        <p className='number'>{data[lang].homeAbout.aboutNr}</p>
                        <p>{data[lang].homeAbout.aboutNrText}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About