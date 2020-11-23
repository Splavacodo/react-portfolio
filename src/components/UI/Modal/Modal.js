import React from 'react'; 

import classes from './Modal.module.css'; 
import Backdrop from '../Backdrop/Backdrop'; 

const Modal = (props) => (
    <React.Fragment>
        <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
        <div className={classes.Modal}
            style={{
                opacity: props.show ? '1' : '0',
                pointerEvents: props.show ? 'auto' : 'none'
            }}>
            {props.children}
        </div>
    </React.Fragment>
); 

export default Modal;