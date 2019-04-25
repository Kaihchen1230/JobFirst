import { Avatar } from 'antd';
import React from 'react';

let mainStyle = {
    padddingLeft:"0px",
    position:"relative",
    left:"20%",
    fontSize:"1.2em",
    letterSpacing: "1px",
    lineHeight:"1.8em",
    border:"solid 1px",
    width:"30%",
    height:"70%",
    textAlign: "center",
    marginTop:"2%"
};

let infoStyle = {
    padding:"8%"
}


const ceoPic = (props) => {
    return (
        <div style={mainStyle}  >
            <div style={infoStyle}>
                <Avatar size={200} src = {props.ceoPic} /> 
                <br/>     
                {props.ceo}
                <h2>CEO</h2>  
            </div>
        </div>
    )
}
export default ceoPic;

