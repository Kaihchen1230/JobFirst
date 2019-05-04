import { Avatar } from 'antd';
import React from 'react';
import { relative } from 'path';


let imageStyle = {
    padddingLeft:"0px",
    position:"relative",
    left:"40%",
    top:"-20%",
    border:"2px solid white",
    borderRadius: "10px"
};

const profileCard = (props) => {
    return (
            <div  >
                <img style={imageStyle} width ="150" src = {props.companyPic} >
                </img>   
            </div>
    )
}
export default profileCard;

