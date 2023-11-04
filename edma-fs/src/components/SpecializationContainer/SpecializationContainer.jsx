import React from 'react';
import './specialization.scss';

const SpecializationContainer = ({ data }) => {
  return (
    <div className='specialization-container'>
      <div className='title'>
        <p>{data.overName}</p>
        <h3>{data.name}</h3>
      </div>
      <div className='all-specializations'>
        {data.content.map((el) => (
          <div className='single-specialization' key={el.specialName}>
            <svg
              version='1.0'
              xmlns='http://www.w3.org/2000/svg'
              width='120px'
              height='120px'
              viewBox='0 0 116.000000 99.000000'
              preserveAspectRatio='xMidYMid meet'
            >
              <g transform='translate(0.000000,99.000000) scale(0.100000,-0.100000)' fill='#4b4a4a' stroke='none'>
                <path d={el.specialImg} />
                {el.specialImg2 && (
                    <path d={el.specialImg2}/>
                )}
              </g>
            </svg>
            <h4>{el.specialName}</h4>
            <p>{el.specialDesc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecializationContainer;