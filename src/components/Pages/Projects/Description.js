import React from 'react'; 

import classes from './Description.module.css'; 

const Description = (props) => (
    <React.Fragment>
    <div className={classes.Right}>
        <img className={classes.img} src={props.image}></img>
    </div>
    <div className={classes.Left}>
        <p>2D Platformer</p>
        <h1>E</h1>
    </div>
    </React.Fragment>
); 

export default Description; 