import {Timeline, TimelineEvent} from 'react-event-timeline'
import React from 'react';
import { I18n } from 'aws-amplify';
const timeLine = (props) => {
    let mainStyle ={
        padddingLeft:"0px",
        marginTop:"20px",
        fontSize:"1.1em",
        letterSpacing: "1px",
        lineHeight:"1.8em",
        width:"50%",
        fontWeight:"700"
    }
    let timelineStyle ={
        marginLeft:"10%",
        fontWeight:"500", 
    }
    let timelines = props["timeline"];
    let Timelines = ()=>{  
        return timelines.map((element,index) => {
            let content = "    "+element.info
            return(
                    <div>
                    <div></div>
                    <Timeline.Item key ={index}
                        dot={<Icon type="down-circle" style={{ fontSize: '2em' }}/>}>
                            {content}
                    </Timeline.Item>
                    </div>
                    )
            })
    }

    return (
        <div style={mainStyle}>
            <h1>{I18n.get('Timeline')}</h1>
            <Timeline style={timelineStyle}>
                <TimelineEvent 
                    createdAt="2016-09-12 10:06 PM"  
                    title="John Doe sent a SMS and create ccny and cuny"  
                    collapsible = "true"
                >
                    I received the payment for $543. Should be shipping the item within a couple of hours.
                </TimelineEvent>
                <TimelineEvent
                    createdAt="2016-09-11 09:06 AM"    
                    title="John Doe sent a SMS and create ccny and cuny"  
                    collapsible = "true"
                    
                >
                    Like we talked, you said that you would share the shipment details? This is an urgent order and so I
                        am losing patience. Can you expedite the process and pls do share the details asap. Consider this a
                        gentle reminder if you are on track already!
                </TimelineEvent>
                <TimelineEvent
                    createdAt="2016-09-11 09:06 AM"   
                    title="John Doe sent a SMS and create ccny and cuny"  
                    collapsible = "true" 
                >
                    Like we talked, you said that you would share the shipment details? This is an urgent order and so I
                        am losing patience. Can you expedite the process and pls do share the details asap. Consider this a
                        gentle reminder if you are on track already!
                </TimelineEvent>       
            </Timeline>
        </div>
    )
}
export default timeLine;

