import {  Form, Input } from 'antd';
import React from 'react';


class ModalForm extends React.Component {

  
    render() {

      return (
        <Form  className="login-form">
          <Form.Item>
              <Input  placeholder="company name" /> 
          </Form.Item>
          <Form.Item>
              <Input  placeholder="company address" /> 
          </Form.Item>   
          <Form.Item>
              <Input  placeholder="company type" /> 
          </Form.Item> 
          <Form.Item>
              <Input  placeholder="company website" /> 
          </Form.Item>       
           <Form.Item>
              <Input  placeholder="company website" /> 
          </Form.Item>          
          <Form.Item>
              <Input  placeholder="company size" /> 
          </Form.Item>         
           <Form.Item>
              <Input  placeholder="company picture" /> 
          </Form.Item>          
          <Form.Item>
              <Input.TextArea rows={6} placeholder="description" /> 
          </Form.Item>
          
          {/* companyName:"aplibaba",
    companyAddress: "NY",
    companyWebsite: "alibaba.com",
    companyType:"internet",
    headquarter: "NY",
    ceoPic:"https://smallbiztrends.com/wp-content/uploads/2018/03/shutterstock_705804559.jpg",
    ceo:"Jacky Ma",
    size:"545",
    revenue:"100M",
    timeline: "",
    description: "At AWS, we believe nothing should stand in a builder’s way, and dreams never have to turn off.\
                  We’re a company of builders, innovators and creators. Our employees experience unparalleled ownership and impact\
                  on our products, and are empowered to innovate and deliver. If you want to build the future with AWS, we’d love\
                  to hear from you.",
    companyPic:"https://smallbiztrends.com/wp-content/uploads/2018/03/shutterstock_705804559.jpg" */}
        </Form>
      );
    }
  }
  
export default ModalForm ;

