import React, { useContext } from 'react'
import SpecializationContainer from '../../SpecializationContainer/SpecializationContainer';
import { data } from '../../../assets/data/dummydata';
import { Context } from '../../../Context/Language';

const Specialization = () => {
    const [{lang}] = useContext(Context);
  return (
    <div className='container'>
        <SpecializationContainer data={data[lang].homeSpecialization}/>
    </div>
  )
}

export default Specialization