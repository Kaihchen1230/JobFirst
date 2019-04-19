import { Card,Button } from 'antd';
import React from 'react';

let imageStyle = {
    width:'80%',
    padddingLeft:"0px"
};

const profileCard = (props) => {
    return (
            <Card
                hoverable
                style={imageStyle} 
                cover={<img alt="example" src="https://smallbiztrends.com/wp-content/uploads/2018/03/shutterstock_705804559.jpg" />}
            >
                <Button type="primary">Follow On facebook</Button>
                <Button type="primary">Learn More</Button>
            </Card>
    )
}
export default profileCard;

