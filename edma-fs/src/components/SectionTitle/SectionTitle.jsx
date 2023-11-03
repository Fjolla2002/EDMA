import React from 'react';
import './sectionTitle.scss';

const SectionTitle = ({ title, beforeLine, afterLine }) => {
    let classname = "";

    if(beforeLine && afterLine) {
        classname = "bothLines"
    }
    else if(beforeLine) {
        classname = "beforeLine"
    };

  return (
    <div className='section-title'>
      <h2 className={classname}>{title}</h2>
    </div>
  );
};

export default SectionTitle;
