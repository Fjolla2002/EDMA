import React, { useContext, useEffect, useState } from 'react';
import { data } from '../../../assets/data/dummydata';
import { Context } from '../../../Context/Language';
import './hero.scss';

const Hero = () => {
    const [{ lang }, dispatch] = useContext(Context);
    const [backImage, setBackImage] = useState(0);
    const nrOfImages = data[lang].homeHero.images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setBackImage((prevBackImage) => (prevBackImage === nrOfImages - 1 ? 0 : prevBackImage + 1));
        }, 4000);
        return () => clearInterval(interval);
    }, [lang, backImage, nrOfImages]);

    return (
        <div className='hero' style={{ backgroundImage: `url(${data[lang].homeHero.images[backImage].image})` }}>
            <div className="container">
                
            </div>
        </div>
    );
}

export default Hero;
