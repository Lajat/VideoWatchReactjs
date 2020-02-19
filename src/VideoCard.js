import React, { Component } from 'react';
import classes from './VideoCard.module.css';

import Axios from 'axios';

class VideoCard extends Component {
    state = {
        videolist: [],
        videodata: [],
        position: 0,
        videoId: "190062231",
        views: "22.5k",
        title: "Croissants | Flour and Stone",
        description: "There is no other way but to commit wholeheartedly to a relationship with a croissant. We have all found ourselves at the mercy of its allure. Here, in another epic film by the uber talented Nathan Rodger, our Erin divulges her personal romance with The Croissant.",
        like: "yellow",
        bookmark: "yellow"
    }

    componentDidMount() {
        Axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist')
        .then((response) => {
            this.setState({videolist: [...response.data]})
        })
        .catch((error) => {
            console.log(error);
        })

        Axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/video')
        .then((res) => {
            this.setState({videodata: [...res.data]})
            console.log(this.state.videodata);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    onVideoCardClicked = (e) => {
        console.log("Video Card Clicked");
        let clickedItem = e.target.getAttribute('datakey');
        for(let i=0;i<this.state.videodata.length;i++){
            if(clickedItem === this.state.videodata[i].id){
                this.setState({videoId: this.state.videodata[i].vimeoId});
                this.setState({title: this.state.videodata[i].title});
                this.setState({description: this.state.videodata[i].description});
                this.setState({position: i});
                this.setState({border:"2px solid yellow"});

                if(this.state.videodata[i].isLiked === true || this.state.videodata[i].isLiked === "true"){
                    this.setState({like:"yellow"});
                }
                else{
                    this.setState({like:"black"});
                }
    
                if(this.state.videodata[i].isSaved === true || this.state.videodata[i].isSaved === "true") {
                    this.setState({bookmark:"yellow"});
                }
                else {
                    this.setState({bookmark:"black"});
                }

                let x = this.state.videodata[i].views;
                if(x.toString().length < 7)
                this.setState({views: x/1000 +"K" + " views"});
                if(x.toString().length >=7 && x.toString().length < 10)
                this.setState({views: (x/1000000).toFixed(2) +"M" + " views"});
            }
        }
    }
    onLikeIconClicked = () => {
        if(this.state.like === "yellow") {
            this.setState({like:"black"});
        }
        else {
            this.setState({like:"yellow"});
        }
    }
    onBookmarkIconClicked = () => {
        if(this.state.bookmark === "yellow") {
            this.setState({bookmark:"black"});
        }
        else {
            this.setState({bookmark:"yellow"});
        }
    }

    render() {
        const VideoCards = this.state.videolist.map((items,pos) => {
            return (
                    <div style={{border: this.state.border}} key={pos} onClick={this.onVideoCardClicked} className={classes.wrapper1} datakey={items.id}>
                        <img className={classes.thumbnail} src={items.thumbnail} datakey={items.id}></img>
                        <h4 className={classes.title} datakey={items.id}>{items.title}</h4>
                    </div>
            )
        })
        
        return (
            <div>
                <a className ={classes.tag} href="#">Back to Home</a>
                <h1 className ={classes.heading}>The Video Player</h1>
                <div id={classes.main}>
                    <div id={classes.playerDiv}>
                    <iframe id={classes.videoPlayer} src={"https://player.vimeo.com/video/" + this.state.videoId} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen ></iframe>
                    <div id={classes.views}>
                        <p id={classes.viewsInNumber}>{this.state.views + "views"}</p>
                        <div id={classes.icons}>
                            <div><i style={{color:this.state.like}} id={classes.like} onClick={this.onLikeIconClicked} className="fas fa-heart"></i></div>
                            <div><i style={{color:this.state.bookmark}} id={classes.bookmark} onClick={this.onBookmarkIconClicked} className="fas fa-bookmark"></i></div>
                        </div>
                    </div>
        <h1 id={classes.videoTitle}>{this.state.title}</h1>
        <p id={classes.videoDescription}>{this.state.description}</p>
                </div>
                <div id={classes.mainPlaylist}>
                    {VideoCards}
                </div>
                </div>
            </div>
        );
    }
}
export default VideoCard;