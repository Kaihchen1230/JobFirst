import { Timeline,Icon } from 'antd';
import React from 'react';
import { I18n } from 'aws-amplify';
const timeLine = (props) => {
    let mainStyle ={
        padddingLeft:"0px",
        fontSize:"1.1em",
        letterSpacing: "1px",
        lineHeight:"1.8em",
        width:"50%"
    }
    let timelineStyle ={
        marginLeft:"5%"
    }
    let timelines = props["timeline"];
    let Timelines = ()=>{  
        return timelines.map(element => {
                            return(<Timeline.Item
                              dot={<Icon type="down-circle" style={{ fontSize: '2em' }}/>}>
                              {element}</Timeline.Item> )
                            })
    }

    return (
        <div style={mainStyle}>
            <h1>{I18n.get('Timeline')}</h1>
            <Timeline style = {timelineStyle} pending="Keep Going..." >
                <Timelines/>        
            </Timeline>
        </div>
    )
}
export default timeLine;

