import React, { useContext, useEffect, useState } from 'react';
import { data } from '../../../assets/data/dummydata';
import { Context } from '../../../Context/Language';
import './hero.scss';

const Hero = () => {
    const [{ lang }] = useContext(Context);
    const [backImage, setBackImage] = useState(0);
    const nrOfImages = data[lang].homeHero.images.length;
    const [text, setText] = useState(0);
    const texti = data[lang].homeHero.content;

    useEffect(() => {
        const interval = setInterval(() => {
            setBackImage((prevBackImage) => (prevBackImage === nrOfImages - 1 ? 0 : prevBackImage + 1));
        }, 4000);
        return () => clearInterval(interval);
    }, [lang, backImage, nrOfImages]);

    const nextText = () => {
        setText((prev) => (prev < texti.length - 1 ? prev + 1 : 0));
    };

    const prevText = () => {
        setText((prev) => (prev > 0 ? prev - 1 : texti.length - 1));
    };

    return (
        <div className='hero' style={{ backgroundImage: `url(${data[lang].homeHero.images[backImage].image})` }}>
            <div className="container">
                <div className='slider'>
                    <div className='text'>
                        <h2>{data[lang].homeHero.content[text].title}</h2>
                        <p>{data[lang].homeHero.content[text].subTitle}</p>
                    </div>
                    <div className="slider-arrows">
                        <span onClick={() => prevText()} className="arrow">&#8249;</span>
                        <span onClick={() => nextText()} className="arrow">&#8250;</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
