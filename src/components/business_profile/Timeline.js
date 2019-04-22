import { Timeline } from 'antd';
import React from 'react';

const timeLine = (props) => {
    return (
        <div>
            <h1>Timeline</h1>
            <Timeline>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            </Timeline>
        </div>
    )
}
export default timeLine;

