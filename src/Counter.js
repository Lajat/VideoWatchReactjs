import React, { Component } from 'react';
import classes from './Counter.module.css';
import VideoCardComponent from "./VideoCardComponent";
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.minCount
        }
    }
    // state = {
    //     count: 0
    // }

    onIncreamentClicked = () => {
        const upadatedValue = this.state.count + 1;
        if(upadatedValue <= this.props.maxCount){
            this.setState({count: upadatedValue})
            console.log(this.state.count);
        }
        // this.state.count + 1;
        // this.setState({count: this.state.count + 1})
    }
    onDecreamentClicked = () => {
        const upadatedValue = this.state.count - 1;
        if(upadatedValue >= this.props.minCount){
            this.setState({count: upadatedValue})
            console.log(this.state.count); 
        }
    }
    componentDidMount() {
        console.log("ComponentDidMount");
    }

    render() {
        return (
            <div className={classes.wrapper}>
                <h1>Count: {this.state.count}</h1>
                <div className = {classes.wrapperDiv}>
                <div>
                <button onClick = {this.props.onLikeIncreamentClicked}>Like +1</button>
                <button onClick = {this.props.onLikeDecreamentClicked}>Like -1</button>
                </div>
                <div>
                <button onClick = {this.props.onDislikeIncreamentClicked}>Dislike +1</button>
                <button onClick = {this.props.onDislikeDecreamentClicked}>Dislike -1</button>
                </div>
                </div>
                {/* <VideoCardComponent videoThumb= {""} videoTitle= {"Test Video Title"}/>
                <VideoCardComponent videoThumb= {""} videoTitle= {"Test Video Title"}/>
                <VideoCardComponent videoThumb= {""} videoTitle= {"Test Video Title"}/>
                <VideoCardComponent videoThumb= {""} videoTitle= {"Test Video Title"}/>
                <VideoCardComponent videoThumb= {""} videoTitle= {"Test Video Title"}/> */}
            </div>
        );
    }
}

export default Counter;
