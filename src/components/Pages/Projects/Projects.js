import React, { useState } from 'react'; 

import EImg from '../../../assets/images/0.png'; 
import EcommImg from '../../../assets/images/Ecomm.png'; 
import PortfolioImg from '../../../assets/images/Portfolio.png'; 
import Ecomm from './Ecomm'; 
import Portfolio from './Portfolio'; 
import E from './E'; 
import Card from '../../UI/ProjectCard/Card'; 
import Modal from '../../UI/Modal/Modal'; 
import classes from './Projects.module.css'; 

const Projects = () => {
    const [ showModal, setModal ] = useState(false); 
    const [ showProject, setProject ] = useState(); 

    const closeHandler = () => {
        setModal(false);  
    } 

    const firstOpenHandler = () => { 
        setModal(true); 
        setProject(
            <E image={EImg} modalClosed={closeHandler} />
        )
    }

    const secondOpenHandler = () => { 
        setModal(true); 
        setProject(
            <Ecomm image={EcommImg} modalClosed={closeHandler} />
        ); 
    }
    const thirdOpenHandler = () => { 
        setModal(true); 
        setProject(
            <Portfolio image={PortfolioImg} modalClosed={closeHandler} />
        ); 
    }


    return(
        <React.Fragment>
            <Modal show={showModal} modalClosed={closeHandler}>
                {showProject}
            </Modal>
            <div className={classes.Cards}>
                <Card clicked={firstOpenHandler} image={EImg}></Card>
                <Card clicked={secondOpenHandler} image={EcommImg}></Card>
                <Card clicked={thirdOpenHandler} image={PortfolioImg}></Card>
            </div>
            <div className={classes.Scanlines}></div>
        </React.Fragment>
    ); 
}; 

export default Projects; 