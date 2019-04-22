import { Avatar } from 'antd';
import React from 'react';


let Style = {
    width:'10%',
    padddingLeft:"0px",
    position:"relative",
    left:"10%",
    top:"15%"

};

const ceoPic = (props) => {
    return (
            <div style={Style}  >
                <Avatar size={100} src = {props.companyPic} >
                </Avatar>   
            </div>
    )
}
export default ceoPic;

