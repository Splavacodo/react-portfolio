import React from 'react'; 

import Button from '../../UI/Button/Button'; 
import classes from './Home.module.scss'; 

const Home = (props) => {
    const projectRedirect = () => { 
        props.history.push('/projects'); 
    }

    return (
        <React.Fragment>
        <div className={classes.Home}>
            <div className={classes.Glitch} data-text="JasonZamora">JasonZamora</div>
            <div className={classes.Glow}>JasonZamora</div>
            <p className={classes.Subtitle}>Software Developer</p>
        </div>
        <div className={classes.ButtonContainer}>
            <Button clicked={projectRedirect}>View Projects</Button>
        </div>
        <div className={classes.Scanlines}></div>
        </React.Fragment>
    ); 
}; 

export default Home; 