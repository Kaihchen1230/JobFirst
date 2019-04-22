import { Avatar } from 'antd';
import React from 'react';

let Style = {
    padddingLeft:"0px",
    position:"relative",
    left:"49%",
    fontSize:"1.2em",
    letterSpacing: "1px",
    lineHeight:"1.8em",
    border:"solid 1px",
    width:"30%",
    textAlign: "center",
    marginTop:"2%"
};


const ceoPic = (props) => {
    return (
        <div style={Style}  >
            <Avatar size={200} src = {props.ceoPic} /> 
            <br/>     
            {props.ceo}
            <h2>CEO</h2>  
        </div>
    )
}
export default ceoPic;

