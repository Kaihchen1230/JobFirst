import { Card } from 'antd';
import MyTag from './tag';
import React from 'react';

// const { Meta } = Card;

const profileCard = (props) => {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://media.istockphoto.com/photos/portrait-of-asian-businesswoman-isolated-on-white-background-picture-id867612168?k=6&m=867612168&s=612x612&w=0&h=lf_i2fBBWsC2hneMh9XEzv68L4l6sV1Rk2TclgAgauU=" />}
        >
            <MyTag />
        </Card>
    )
}

export default profileCard;