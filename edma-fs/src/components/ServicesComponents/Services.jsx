import React, { useContext, useState } from 'react';
import { data } from '../../assets/data/dummydata';
import { Context } from '../../Context/Language';
import SectionTitle from '../SectionTitle/SectionTitle';
import './services.scss';
import Modal from '../HomeComponents/Clients/Modal';

const Services = () => {
    const [{lang}] = useContext(Context);
    const [service, setService] = useState();

    const getService = (el) => {
        setService(el);
    }

  return (
    <div className='services'>
        <div className="container">
            <div className='title'>
                <SectionTitle
                    title={data[lang].servicesPage.title}
                    beforeLine={true}
                    afterLine={true}
                />
            </div>
            <div className='all-services'>
                {
                    data[lang].servicesPage.services.map((el) => (
                        <div key={el.title} className='single-service'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="100" viewBox="0 0 352 222" version="1.1" >
                                {el.logo.map((item) => (
                                    <path key={item.path} d={item.path} fill='#4b4a4a'/>
                                ))}
                            </svg>
                            <h3>{el.title}</h3>
                            <p>{el.desc}</p>
                            <button onClick={() => getService(el)}>
                                {el.btnText}
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
        {service && (
            <Modal
                logo={service.image}
                name={service.title}
                desc={service.desc}
                closeModal={() => setService()}
            />
        )}
    </div>
  )
}

export default Services