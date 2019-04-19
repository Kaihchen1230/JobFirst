import React from 'react';
import { Row, Col, Button, Card, Icon, Avatar } from 'antd';
import { Link } from 'gatsby';


const { Meta } = Card;
const PersonList = (props) => {
    let personList = props.persons.map((item, index) => {
        const { name, degree, cover, pic } = item;
        console.log(name);
        <Col span={8} style={{ margin: '10px 0' }}>
            <Card
                style={{ width: 300 }}
                // cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                cover={<img alt="example" src={cover} />}
                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
                <Meta
                    // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    // title="Card title"
                    // description="This is the description"
                    avatar={<Avatar src={pic} />}
                    title={name}
                    description={degree}
                />
            </Card>        
        </Col>
    });

    return (
        <div style={{ background: '#ECECEC', padding: '30px', height: '1000px' }}>
            <Row gutter={16}>
                {personList}
            </Row>
        </div>
    )
}

export default PersonList;