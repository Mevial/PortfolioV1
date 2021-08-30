import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Example from "./example/Example";

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Example title={"Project name"}
                             description={"Short description"}/>
                    <Example title={"Project name"}
                             description={"Short description"}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;