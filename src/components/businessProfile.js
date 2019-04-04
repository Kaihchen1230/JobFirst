import React from "react"
import { getUser } from "../services/auth"
import {
     Select,Timeline, Row, Col, Button, Card
  } from 'antd';
  
  const { Option } = Select;

  let imageStyle = {
    width:'80%',
    padddingLeft:"0px"
  };

  let bodyStyle={
    justifyContent: 'center', alignItems: 'center',margin:'auto', width:'60%'

  }
  const { Meta } = Card;
  class businessProfile extends React.Component {

  
    render() {

      return (
        <div style={bodyStyle}>
        <h1>Company: aplipapa</h1>
        
        <Card
            hoverable
            style={imageStyle} 
            cover={<img alt="example" src="https://smallbiztrends.com/wp-content/uploads/2018/03/shutterstock_705804559.jpg" />}
        >

            <Button type="primary">Follow On facebook</Button>
            <Button type="primary">Learn More</Button>
        </Card>
        <h2>Location:NY USA</h2>
        <h1>About us</h1>
        <div>At AWS, we believe nothing should stand in a builder’s way, and dreams never have to turn off. 
            We’re a company of builders, innovators and creators. Our employees experience unparalleled ownership and impact
            on our products, and are empowered to innovate and deliver. If you want to build the future with AWS, we’d love
            to hear from you.
        </div>
        <h2>TimeLine</h2>
        <Timeline>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
        </Timeline>
      </div>
      );
    }
  }
  
  


export default  businessProfile;




