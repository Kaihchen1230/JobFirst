import {  Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import React from 'react';
import DeleteIcon from '@material-ui/icons/EmailTwoTone';

class ModalForm extends React.Component {
  
    render() {

      return (
        <Form  className="login-form">
          <Form.Item>
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Name" />
          </Form.Item>
          <Form.Item>
              <Input prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Location" />
          </Form.Item>
          <Form.Item>
              <Input prefix={<Icon type="picture" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Picture" />
          </Form.Item>
          <Form.Item>
              <Input prefix={<DeleteIcon type="email" style={{ color: 'rgba(0,0,0,.25)',  fontSize: "18", }} />} placeholder=" Email" />
          </Form.Item>
         
          <Form.Item>
              <Input.TextArea rows={4} prefix={<Icon type="snippets" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Description" />
          </Form.Item>
        </Form>
      );
    }
  }
  
export default ModalForm ;

