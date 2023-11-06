import React, { useContext } from 'react';
import { Context } from '../../../Context/Language';
import { data } from '../../../assets/data/dummydata';
import './middle.scss';
import NumberIncrement from './NumberIncrement';

const Middle = () => {
    const [{lang}] = useContext(Context);

  return (
    <div className='middle'>
        <div className='container'>
            <div className='content'>
                <div className='left'>
                    {data[lang].aboutPage.middle.left.map((el) => (
                        <div className='number-content' key={el.name}>
                            <NumberIncrement number={el.number}/>
                            <p>{el.name}</p>
                        </div>
                    ))}
                </div>
                <div className='right'>
                    <div className='right-content'>
                        <h5>{data[lang].aboutPage.middle.right.title}</h5>
                        <p>{data[lang].aboutPage.middle.right.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Middle