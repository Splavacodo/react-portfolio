import React from 'react'; 

import E from '../../../assets/images/0.png'; 
import Button from '../Button/Button'; 
import classes from './Card.module.css'; 

const Card = () => (
    <div className={classes.Card}>
        <img className={classes.img} src={E} />
        <Button btnType='CardButton'>View</Button>
    </div>
); 

export default Card; 