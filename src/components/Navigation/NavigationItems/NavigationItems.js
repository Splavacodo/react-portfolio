import React from 'react'; 

import NavigationItem from './NavigationItem/NavigationItem'; 
import classes from './NavigationItems.module.css'; 

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/react-portfolio' exact>Home</NavigationItem>
        <NavigationItem link='/react-portfolio/projects'>Projects</NavigationItem>
    </ul>
); 

export default NavigationItems; 