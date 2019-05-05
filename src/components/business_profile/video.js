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
                width="580"
                height="330" 
                src= {props.videoURL}
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen = "true">
            </iframe>
        </div>
    );
};