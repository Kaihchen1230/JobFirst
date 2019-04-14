import {  Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import React from 'react';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;



class ModalForm extends React.Component {

  
    render() {

      return (
        <Form  className="login-form">
          <Form.Item>

              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
    
          </Form.Item>
          <Form.Item>

              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
   
          </Form.Item>

        </Form>
      );
    }
  }
  
export default ModalForm ;

