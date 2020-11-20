import React from 'react'; 

import Card from '../../UI/ProjectCard/Card'; 
import classes from './Projects.module.css'; 

const Projects = () => (
    <React.Fragment>
    <div className={classes.Cards}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </div>
    <div className={classes.Scanlines}></div>
    </React.Fragment>
); 

export default Projects; 