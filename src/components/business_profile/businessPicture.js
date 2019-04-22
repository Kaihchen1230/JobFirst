import { Avatar } from 'antd';
import React from 'react';
import { relative } from 'path';


let imageStyle = {
    width:'10%',
    padddingLeft:"0px",
    position:"relative",
    left:"10%",
    top:"15%"

};

const profileCard = (props) => {
    return (
            <div style={imageStyle}  >
            <Avatar size={100} src = {props.companyPic} >
            </Avatar>
             
            </div>
    )
}
export default profileCard;

