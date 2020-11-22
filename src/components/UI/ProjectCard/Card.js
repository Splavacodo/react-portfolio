import React from 'react'; 

import classes from './Card.module.css'; 

const Card = (props) => (
    <div className={classes.Card}>
        <img className={classes.img} src={props.image} alt=""/>
        <button className={classes.button} onClick={props.clicked}>View</button>
    </div>
); 

export default Card; 