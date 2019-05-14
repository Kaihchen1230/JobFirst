import React from 'react';
import nodataImg from '../../../static/nodata.png';
let imageStyle = {
    padddingLeft:"0px",
    position:"relative",
    left:"40%",
    top:"-20%",
    border:"2px solid white",
    borderRadius: "10px"
};

const profileCard = (props) => {
    let source = props.companyLogo ? props.companyLogo : nodataImg;
    return (
        <div  >
            <img data-testid="businessPic" style={imageStyle} width ="150" height="auto" src = {source} >
            </img>   
        </div>
    )
}
export default profileCard;

