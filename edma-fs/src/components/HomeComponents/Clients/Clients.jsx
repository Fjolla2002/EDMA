import React, {useContext} from 'react';
import  './clients.scss';
import { data } from '../../../assets/data/dummydata';
import { Context } from '../../../Context/Language';

const Clients = () => {
    const [{lang}, dispatch] = useContext(Context);
    const clientsdata = data[lang].homeClients;
  return (
    <div className='clients'>
        <div className='container'>
            <div className='clients-content'>
                <div className='title'>
                    <p>{clientsdata.overName}</p>
                    <h3>{clientsdata.name}</h3>
                </div>
                <div className='all-clients'>
                    {clientsdata.content.map((el) => (
                        <div className='single-client' key={el.name}>
                            <p>{el.name}</p>
                            <button>
                                <img src={el.image} alt={el.name} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Clients