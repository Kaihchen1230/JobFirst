import { Card,Button } from 'antd';
import React from 'react';
import { configConsumerProps } from 'antd/lib/config-provider';

let imageStyle = {
    width:'80%',
    padddingLeft:"0px"
};

const profileCard = (props) => {
    return (
            <Card
                hoverable
                style={imageStyle} 
                cover={<img alt="example" src = {props.companyPic} />}
            >
                <Button type="primary">Learn More</Button>
            </Card>
    )
}
export default profileCard;

