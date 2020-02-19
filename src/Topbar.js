import React from 'react';

import classes from './Topbar.module.css';

const Topbar = (props) => {
    // return(
    //     <div className={classes.Top}>
    //         <h1>Like: {props.like}</h1>
    //         <h1>Dislike: {props.dislike}</h1>
    //     </div>
    // );
    return(
        <div className={classes.topBar}>
           <img className={classes.img} src="https://i.imgur.com/oxzU1bk.png" alt="Amazon Icon"/>
        </div>
    );
}
export default Topbar;