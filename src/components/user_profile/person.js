import React from 'react';
import pikachiu from '../../../static/pik.jpg';
//const pikachiu = require('../../../static/pik.jpg');
import { Card, Icon, Avatar } from 'antd';
import { I18n, Storage } from 'aws-amplify';
const { Meta } = Card;

const Person = (props) => {
    let picture = props.user.pic;
    const { firstName, favoriteQuote } = props.user;
    if (picture == null || picture ==='no') {
        picture = pikachiu;
    }
    return (
        <Card
            data-testid="card-contain-user-info" // for testing purpose
            hoverable={true}
            cover={<img alt="default" src={picture} />}
        >
            <Meta
                avatar={<Avatar src={picture} />}
                title={firstName}
                description={favoriteQuote}
            />
        </Card>
    );

}

export default Person;