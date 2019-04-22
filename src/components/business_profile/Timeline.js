import { Timeline,Icon } from 'antd';
import React from 'react';

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
    return (
        <div style={mainStyle}>
            <h1>Timeline</h1>
            <Timeline style = {timelineStyle} pending="Keep Going..." >
                <Timeline.Item
                    dot={<Icon type="down-circle" style={{ fontSize: '2em' }}/>}>
                    Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item
                    dot={<Icon type="down-circle" style={{ fontSize: '2em' }}/>}>
                    Solve initial network problems 2015-09-01
                </Timeline.Item>
                <Timeline.Item
                    dot={<Icon type="down-circle" style={{ fontSize: '2em' }}/>}>
                Network problems being solved 2015-09-01</Timeline.Item>
                <Timeline.Item
                    dot={<Icon type="down-circle" style={{ fontSize: '2em' }}/>}>
                    Technical testing 2015-09-01</Timeline.Item>              
            </Timeline>
        </div>
    )
}
export default timeLine;

