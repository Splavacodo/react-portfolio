import React from 'react'; 

import Button from '../../UI/Button/Button'; 
import classes from './Home.module.scss'; 

const Home = () => (
    <React.Fragment>
    <div className={classes.Container}>
        <div className={classes.Glitch} data-text="JasonZamora">JasonZamora</div>
        <div className={classes.Glow}>JasonZamora</div>
        <p className={classes.Subtitle}>Full-Stack Developer</p>
    </div>
    <div className={classes.Container2}>
        <Button>Projects</Button>
    </div>
    <div className={classes.Scanlines}></div>
    </React.Fragment>
); 

export default Home; 