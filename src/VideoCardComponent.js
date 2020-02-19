import React from 'react';
import classes from './VideoCardComponent.module.css';

const VideoCardComponent = (props) => {
    return (
        <div id="main-playlist">
            <div className={classes.wrapper1}>
                <img className={classes.thumbnail} src={props.thumbnail}></img>
                <h4 className={classes.title}>{props.title}</h4>
            </div>
        </div>
    )
}
export default VideoCardComponent;