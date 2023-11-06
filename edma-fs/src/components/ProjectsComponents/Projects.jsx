import React, { useContext, useState } from 'react';
import {Context} from '../../Context/Language';
import SectionTitle from '../SectionTitle/SectionTitle';
import './projects.scss';
import { data } from '../../assets/data/dummydata';
import {NavLink} from 'react-router-dom';

const Projects = () => {
    const [{lang}] = useContext(Context);
    const [nrProjects, setNrProjects] = useState(3);

    const handleLoadMore = () => {
        if(nrProjects < data[lang].projectPage.projects.length){
            setNrProjects(nrProjects + 3)
        }
    }
    
  return (
    <div className='projects'>
        <div className="container">
            <div className='title'>
                <SectionTitle
                    title={data[lang].projectPage.title}
                    beforeLine={true}
                    afterLine={true}
                />
            </div>
            <div className="all-projects">
                {data[lang].projectPage.projects.slice(0, nrProjects).map((el) => (
                    <div className='single-project' key={el.title}>
                        <span className='project-title'>{el.title}</span>
                        <NavLink to={`/projects/${el.title}`}>
                            <img src={el.image} alt={el.title} />
                        </NavLink>
                    </div>
                ))}
            </div>
            {nrProjects < data[lang].projectPage.projects.length &&
                <button onClick={() => handleLoadMore()}>
                    {data[lang].projectPage.btnText}
                </button>
            }
        </div>
    </div>
  )
}

export default Projects