import React from 'react';
import { Player, PosterImage } from 'video-react';
let mainStyle = {
    position:"relative",
    left:"10%",
    marginTop:"3%",
    width:"90%",
};

export default props => {
    return (
        <div style={mainStyle} >
            <Player
                poster="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-ap-northeast-1.amazonaws.com%2Fpsh-ex-ftnikkei-3937bb4%2Fimages%2F6%2F3%2F8%2F2%2F12242836-4-eng-GB%2F20180126_alibaba.jpg?source=nar-cms"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </div>
    );
};