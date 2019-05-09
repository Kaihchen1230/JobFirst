import { Avatar } from 'antd';
import React from 'react';
import { Icon } from 'antd';
import { I18n } from 'aws-amplify';

let Style = {
    padddingLeft:"0px",
    fontSize:"1.2em",
    letterSpacing: "1px",
    lineHeight:"1.5em"

};

const about = (props) => {
    let description = props.description!=""? props.description :<img src="https://camo.githubusercontent.com/472c00f642bd004e55ba0771541138593eb23a53/687474703a2f2f6564756d6f74652e636f6d2f6173736574732f696d616765732f736c696465722f6e6f7464617461666f756e642e706e67"/>
    return (
        <div style={Style}  >
        <br />
            <h2>{I18n.get('About Company')}</h2> 
            {description}
        </div>
    )
}
export default about;

