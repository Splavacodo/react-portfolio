import React from 'react'; 

import classes from './Socials.module.css'; 

const Socials = () => (
    <div className={classes.Socials}>
        <a target={'_blank'} href='https://github.com/Splavacodo' className={classes.Github}>
            <i className='fa fa-github'></i>
        </a>
        <a target={'_blank'} href='https://www.linkedin.com/in/jason-zamora-88956318a/' className={classes.LinkedIn}>
            <i className='fa fa-linkedin'></i>
        </a>
    </div>
); 

export default Socials; 