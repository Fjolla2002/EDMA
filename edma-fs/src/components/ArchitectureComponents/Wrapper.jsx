import React, { useContext } from 'react';
import { data } from '../../assets/data/dummydata';
import { Context } from '../../Context/Language';
import ContentContainer from '../ContentContainer/ContentContainer';
import './wrapper.scss';

const Wrapper = () => {
    const [{lang}, dispatch] = useContext(Context);

  return (
    <div className='wrapper'>
        <div className="container">
            {data[lang].architecturePage.map((el) => (
                <ContentContainer 
                    key={el.title}
                    sectionTitle={el.title}
                    sectionDesc={el.desc}
                    btnText={el.btnText}
                    afterLine={true}
                 />
            ))}
        </div>
    </div>
  )
}

export default Wrapper