import React, {useState, useContext} from 'react';
import  './clients.scss';
import { data } from '../../../assets/data/dummydata';
import { Context } from '../../../Context/Language';
import Modal from './Modal';

const Clients = () => {
    const [{lang}] = useContext(Context);
    const clientsdata = data[lang].homeClients;
    const [client, setClient] = useState();

    const getClient = (el) => {
        setClient(el);
    }
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
                            <button onClick={() => getClient(el)}>
                                <img src={el.image} alt={el.name} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        {client && (
            <Modal 
                logo={client.image}
                name={client.name}
                desc={client.desc}
                path={client.path}
                closeModal={() => setClient()}
            />
        )}
    </div>
  )
}

export default Clients