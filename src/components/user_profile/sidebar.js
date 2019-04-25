import React from 'react';
import pikachiu from '../../../static/pik.jpg';
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

const Sidebar = (props) => {
    let { pic, firstName, lastName } = props.user;
    if (pic == null) {
        pic = pikachiu;
    }
    return (
        <Card
            hoverable={true}
            cover={<img alt="default" src={pic} />}
        >
            <Meta
                avatar={<Avatar src={pic} />}
                title={firstName}
                description="This is the description"
            />
        </Card>
    );

}

export default Sidebar;