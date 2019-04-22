import { Avatar } from 'antd';
import React from 'react';
import { Icon } from 'antd';


let Style = {
    padddingLeft:"0px",
    fontSize:"1.2em",
    letterSpacing: "1px",
    lineHeight:"1.5em"

};

const about = (props) => {
    console.log("props, ",props);
    return (
            <div style={Style}  >
                <h2>Brief Info</h2> 
                {props.description}
            </div>
    )
}
export default about;

