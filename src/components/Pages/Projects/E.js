import React from 'react'; 

import Button from '../../UI/Button/Button'; 
import classes from './E.module.css'; 

const E = (props) => (
    <React.Fragment>
    <div className={classes.Right}>
        <img src={props.image} alt="E"></img>
    </div>
    <div className={classes.Left}>
        <header><i className="fa fa-times fa-lg" onClick={props.modalClosed}></i></header>
        <p>2D Platformer</p>
        <h1>E</h1>
        <div className={classes.ToolContainer}>
            <p className={classes.Tool}>Unity</p>
            <p className={classes.Tool}>C#</p>
        </div>
        <h3>About</h3>
        <p className={classes.Desc}>E is meant to be a 2D platformer that focuses on a pressured playing experience. Afer the player progresses a bit, there is the introduction 
            of mud which rises while the player travles upwards past obstacles. To pass the level the player must find a trophy which is included at the end of each level. I used 
            Unity's tilemap feature to make each level in combination with a 3rd party spritesheet. E features enemies which the player is meant to maneuvor around and also a variety of hazards which the player can lose lives from. All the code was done 
            in C# utilizing the Unity game engine. 
        </p>
        <div className={classes.ButtonContainer}>
            <a target={'_blank'} rel='noreferrer' href='https://pixelfrog-store.itch.io/pixel-adventure-1'><Button><i className="fa fa-eye fa-sm"></i>Demo</Button></a>
            <a target={'_blank'} rel='noreferrer' href='https://github.com/Splavacodo/E'><Button><i className="fa fa-code"></i>Code</Button></a>
        </div>
    </div>
    </React.Fragment>
); 

export default E; 