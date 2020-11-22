import React, { useState } from 'react'; 

import E from '../../../assets/images/0.png'; 
import EDesc from './E'; 
import Card from '../../UI/ProjectCard/Card'; 
import Modal from '../../UI/Modal/Modal'; 
import classes from './Projects.module.css'; 

const Projects = () => {
    const [ showModal, setModal ] = useState(false); 

    const closeHandler = () => {
        setModal(false);  
    } 

    const openHandler = () => { 
        setModal(true);  
    }

    return(
        <React.Fragment>
            <Modal show={showModal} modalClosed={closeHandler}>
                <EDesc image={E} modalClosed={closeHandler}></EDesc>
            </Modal>
            <div className={classes.Cards}>
                <Card clicked={openHandler} image={E}></Card>
                <Card clicked={openHandler} image={E}></Card>
                <Card clicked={openHandler} image={E}></Card>
            </div>
            <div className={classes.Scanlines}></div>
        </React.Fragment>
    ); 
}; 

export default Projects; 