import React from 'react'; 

import Button from '../../UI/Button/Button'; 
import classes from './Portfolio.module.css'; 

const Portfolio = (props) => (
    <React.Fragment>
    <div className={classes.Right}>
        <img src={props.image} alt="Portfolio"></img>
    </div>
    <div className={classes.Left}>
        <header><i className="fa fa-times fa-lg" onClick={props.modalClosed}></i></header>
        <p>React App</p>
        <h1>Portfolio</h1>
        <div className={classes.ToolContainer}>
            <p className={classes.Tool}>JavaScript</p>
            <p className={classes.Tool}>React</p>
            <p className={classes.Tool}>HTML</p>
            <p className={classes.Tool}>CSS</p>
            <p className={classes.Tool}>Sass</p>
        </div>
        <h3>About</h3>
        <p className={classes.Desc}>This portfolio is a single page application thanks to React. I learned a ton about CSS when trying to come up with how I wanted to present 
            everything. To style my components I used CSS modules. The home page makes use of SCSS for the animation and the projects page is made using vanilla CSS. This 
            portfolio should also be responsive to multiple devices. 
        </p>
        <div className={classes.ButtonContainer}>
            <a target={'_blank'} rel='noreferrer' href='https://splavacodo.github.io/react-portfolio'><Button><i className="fa fa-eye fa-sm"></i>Demo</Button></a>
            <a target={'_blank'} rel='noreferrer' href='https://github.com/Splavacodo/react-portfolio'><Button><i className="fa fa-code"></i>Code</Button></a>
        </div>
    </div>
    </React.Fragment>
); 

export default Portfolio; 