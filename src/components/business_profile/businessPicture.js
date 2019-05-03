import { Avatar } from 'antd';
import React from 'react';
import { relative } from 'path';


let imageStyle = {
    padddingLeft:"0px",
    position:"relative",
    left:"40%",
    top:"-20%",
    border:"2px solid white"
};

const profileCard = (props) => {
    return (
            <div  >
                <img   style={imageStyle} width ="200" src = {props.companyPic} >
                </img>   
            </div>
    )
}
export default profileCard;

