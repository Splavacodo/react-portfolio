import React from 'react'; 

import Button from '../../UI/Button/Button'; 
import classes from './Projects.module.css'; 

const Projects = () => (
    <React.Fragment>
    <div className={classes.Container}>
        <Button>Projects</Button>
    </div>
    <div className={classes.Scanlines}></div>
    </React.Fragment>
); 

export default Projects; 