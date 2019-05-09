import React from 'react';
let mainStyle = {
    position:"relative",
    left:"7%",
    marginTop:"0%",
    marginBottom:"10%",
};


export default props => {
    //check if a valid youtube URL, if the URL is invalid, it wont show the video 
    let matchYoutubeUrl =(url)=> {
        var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        if(url.match(p)){
            return url.match(p)[1];
        }
        return false;
    }
    if(!matchYoutubeUrl(props.videoURL))
        return null;
    return (
        <div style={mainStyle} >
            <iframe 
                data-testid="comVideo"
                width="580"
                height="330" 
                src= {props.videoURL}
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen = {true}>
            </iframe>
        </div>
    );
};

