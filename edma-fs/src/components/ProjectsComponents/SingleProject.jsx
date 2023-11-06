import React, { useContext, useEffect, useState } from 'react';
import { data } from '../../assets/data/dummydata';
import { useParams } from 'react-router-dom';
import { Context } from '../../Context/Language';
import SectionTitle from '../SectionTitle/SectionTitle';
import './singleProject.scss';

const SingleProject = () => {
    const { title } = useParams();
    const [{ lang }] = useContext(Context);
    const [index, setIndex] = useState(-1);
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        if (lang === "en") {
        const projectIndex = data["en"].projectPage.projects.findIndex((el) => el.title === title);
        setIndex(projectIndex);
        } else {
        const projectIndex = data["ger"].projectPage.projects.findIndex((el) => el.title === title);
        setIndex(projectIndex);
        }
    }, [lang, title]);

    useEffect(() => {
        if (index !== -1) {
        const project = data[lang]?.projectPage.projects[index];
        setProjectData(project);
        }
    }, [index, lang]);

  return (
    <div className='singleProject'>
      <div className='container'>
        {projectData && (
          <div className='content'>
                <div className='title'>
                    <SectionTitle 
                        title={`${data[lang].projectPage.title} / ${projectData.title}`} 
                        beforeLine={true} 
                        afterLine={true}
                    />
                </div>
                <div className='image-container'>
                    <img src={projectData.image} alt={projectData.title} />
                </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleProject;
