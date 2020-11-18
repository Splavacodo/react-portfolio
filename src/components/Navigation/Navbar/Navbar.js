import React from 'react'; 

import NavigationItems from '../NavigationItems/NavigationItems';  
import classes from './Navbar.module.css'; 

const Navbar = () => { 
    return (
        <header className={classes.Navbar}>
            <nav>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default Navbar; 