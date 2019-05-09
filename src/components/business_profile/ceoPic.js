import { Avatar } from 'antd';
import React from 'react';

let mainStyle = {
    padddingLeft:"0px",
    position:"relative",
    left:"39%",
    fontSize:"1.2em",
    letterSpacing: "1px",
    lineHeight:"1.8em",
    width:"60%",
    height:"40%",
    textAlign: "center",
    margin:"2% 1%",

};

let infoStyle = {
    padding:"2%",
    border:"1px solid black",
    borderRadius: "10px",
}


const ceoPic = (props) => {
    return (
        <div style={mainStyle}  >
            <div style={infoStyle}>
                <Avatar size={180} src = {props.ceoPic} />   
                <br/>     
                <span>{props.ceo}</span>
                <h2>CEO</h2>  
            </div>
        </div>
    )
}
export default ceoPic;

