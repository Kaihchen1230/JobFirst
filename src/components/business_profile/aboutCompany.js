import { Avatar } from 'antd';
import React from 'react';
import { Icon } from 'antd';
import { I18n } from 'aws-amplify';
import nodataImg from '../../../static/nodata.png';
let Style = {
    padddingLeft:"0px",
    fontSize:"1.2em",
    letterSpacing: "1px",
    lineHeight:"1.5em"

};

const about = (props) => {
    let description = props.description!=""? props.description :<img style={{width:"20%"}} src={nodataImg}/>
    return (
        <div style={Style}  >
        <br />
            <h2>{I18n.get('About Company')}</h2> 
            {description}
        </div>
    )
}
export default about;

