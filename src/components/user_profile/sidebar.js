import React from 'react';
import pikachiu from '../../../static/pik.jpg';
//const pikachiu = require('../../../static/pik.jpg');
import { Card, Icon, Avatar } from 'antd';
import { I18n, Storage } from 'aws-amplify';
const { Meta } = Card;

const Sidebar = (props) => {
    let { pic, firstName, lastName, favoriteQuote, identityID } = props.user;
    if (pic == null || pic ==='no') {
        pic = pikachiu;
    }
    return (
        <Card
            data-testid="card-contain-user-info" // for testing purpose
            hoverable={true}
            cover={<img alt="default" src={pic} />}
        >
            <Meta
                avatar={<Avatar src={pic} />}
                title={firstName}
                description={favoriteQuote}
            />
        </Card>
    );

}

export default Sidebar;