import React from 'react';
let mainStyle = {
    position:"relative",
    left:"7%",
    marginTop:"-5%",
    marginBottom:"10%",
};

export default props => {
    return (
        <div style={mainStyle} >
            <iframe 
                data-testid="comVideo"
                width="580"
                height="330" 
                src= {props.videoURL}
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullscreen = "true">
            </iframe>
        </div>
    );
};