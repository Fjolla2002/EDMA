import React, { useContext } from 'react';
import { data } from '../../assets/data/dummydata';
import { Context } from '../../Context/Language';
import ContentContainer from '../ContentContainer/ContentContainer';
import './contact.scss';
import Form from './Form';

const Contact = () => {
    const [{ lang }] = useContext(Context);
  return (
    <div className='contact'>
        <div className='container'>
            <div className='contact-content'>
                <div className='up-content'>
                    <ContentContainer
                        sectionTitle={data[lang].contactPage.title}
                        sectionDesc={data[lang].contactPage.desc}
                        afterLine={true}
                    />
                    <p className='contact-subtitle'>{data[lang].contactPage.bigTitle}</p>
                </div>  
                <div className='middle-content'>
                    <div className='left-contact'>
                        <ul>
                            {data[lang].contactPage.contactInfo.map((el) => (
                                <li key={el.name}>
                                    <span>{el.name}</span>
                                    <ul>
                                        {el.values.map((info) => (
                                            <li key={info.value}>
                                                <p>{info.value}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='right-contact'>
                        <Form/>
                    </div>
                </div>
                <div className='bottom-contact'>
                    <div className='map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.4642054029223!2d21.171303075393666!3d42.65151741663937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549f463e1683c9%3A0x317be6fd27211341!2sBIT%20Academy!5e0!3m2!1sen!2s!4v1699288578913!5m2!1sen!2s" width="600" height="450" style={{border: "0px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact