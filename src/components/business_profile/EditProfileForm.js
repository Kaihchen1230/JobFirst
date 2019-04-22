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
          
        </Form>
      );
    }
  }
  
export default ModalForm ;

