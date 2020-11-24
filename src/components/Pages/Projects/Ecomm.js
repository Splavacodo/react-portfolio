import React from 'react'; 

import Button from '../../UI/Button/Button'; 
import classes from './Ecomm.module.css'; 

const Ecomm = (props) => (
    <React.Fragment>
    <div className={classes.Right}>
        <img src={props.image} alt="Portfolio"></img>
    </div>
    <div className={classes.Left}>
        <header><i className="fa fa-times fa-lg" onClick={props.modalClosed}></i></header>
        <p>Full-Stack Web App</p>
        <h1>Ecomm</h1>
        <div className={classes.ToolContainer}>
            <p className={classes.Tool}>JavaScript</p>
            <p className={classes.Tool}>Node.js</p>
            <p className={classes.Tool}>Express.js</p>
            <p className={classes.Tool}>HTML</p>
            <p className={classes.Tool}>Bulma.css</p>
        </div>
        <h3>About</h3>
        <p className={classes.Desc}> For this project I learned how to build the front-end and back-end of a web app. I worked with Node.js and Express to handle the backend and 
        created a custom database to handle user credentials. To update the web app, there is a admin panel where the admin can manage their products. Before the admin panel can be
        accessed, there is a signin page for returning users and a signup for new users. The UI for the entire web app was done using Bulma.css and HTML with the aid of JavaScript.
        </p>
        <div className={classes.ButtonContainer}>
            <a target={'_blank'} rel='noreferrer' href='https://shrouded-depths-09568.herokuapp.com/'><Button><i className="fa fa-eye fa-sm"></i>Demo</Button></a>
            <a target={'_blank'} rel='noreferrer' href='https://github.com/Splavacodo/Ecomm'><Button><i className="fa fa-code"></i>Code</Button></a>
        </div>
    </div>
    </React.Fragment>
); 

export default Ecomm; 