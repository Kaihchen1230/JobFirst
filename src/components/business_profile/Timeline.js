import { Timeline, TimelineEvent } from 'react-event-timeline'
import {Icon} from 'antd';
import React from 'react';
import { I18n } from 'aws-amplify';
const timeLine = (props) => {
    let mainStyle = {
        padddingLeft: "0px",
        marginTop: "20px",
        fontSize: "1.1em",
        letterSpacing: "1px",
        lineHeight: "1.8em",
        width: "50%",
        fontWeight: "700"
    }
    let timelineStyle = {
        fontSize: "1.1em",
        marginLeft: "10%",
        fontWeight: "500",
    }
    let timelines = props["timeline"];
    let Events = () => {
        return timelines.map((element, index) => {
            return (
                <div>
                    <TimelineEvent
                        bubbleStyle={{ border: "2px solid #1890ff"} }
                        icon ={<Icon type="trophy"  style={{ fontSize: '20px' ,color:"#1890ff" }}  />}
                        createdAt={element.date}
                        title={element.title}
                    >
                        {element.info}
                    </TimelineEvent>
                </div>
            )
        })
    }

    return (
        <div style={mainStyle}>
            <h1>{I18n.get('Timeline')}</h1>
            <Timeline style={timelineStyle}>
                <Events/>
            </Timeline>
        </div>
    )
}
export default timeLine;

