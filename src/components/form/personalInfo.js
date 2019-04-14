import React from 'react';
import { Form, Input, DatePicker, Col, TimePicker, Select, Cascader, InputNumber, title, PageHeader } from 'antd';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';

const FormItem = Form.Item;
const states = [
    {
        value: 'New York',
        label: 'New York'
    },
    {
        value: 'California',
        label: 'California'
    },
    {
        value: 'New Jersey',
        label: 'New Jersey'
    }
]



class PersonalInfo extends React.Component{
    
    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            }
          };

        return(
            <Form>
                 <h1 align="center">My Information</h1>
                <br/>
                <h2 style={{marginLeft: "20%"}}>Name:</h2>
                <FormItem
                    {...formItemLayout}
                    label="First Name"
                    >
                    <Input style={{width: "50%"}} required/>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Last Name"
                    >
                    <Input style={{width: "50%"}} required/>
                </FormItem>
                <h2 style={{marginLeft: "20%"}}>Address:</h2>
                <FormItem
                    {...formItemLayout}
                    label="Address Line 1"
                    >
                    <Input style={{width: "50%"}} required/>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Address Line 2"
                    >
                    <Input style={{width: "50%"}}/>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="City"
                    >
                    <Input style={{width: "50%"}} required/>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="State"
                    >
                    {getFieldDecorator('state', {
                        
                        rules: [{ type: 'array', required: true, message: 'Please select your state!' }],
                    })(
                        <Cascader options={states} style = {{width: "50%"}}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Zip COde"
                    >
                    {getFieldDecorator('Zip Code', {
                        
                        rules: [{required: true, message: 'Please select your zip code!' }],
                    })(
                        <Input style={{width: "50%"}} required/>
                    )}
                </FormItem>
                <h2 style={{marginLeft: "20%"}}>Contact Information</h2>
                <FormItem
                    {...formItemLayout}
                    label="E-mail"
                    hasFeedback
                    >
                    {getFieldDecorator('email', {
                        rules: [{
                        required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input type = "email" style = {{width: "50%"}}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Phone Number"
                    >
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input your phone number!' }],
                    })(
                        <Input style={{ width: '50%' }} />
                    )}
                </FormItem>
            </Form>
            
        );
    }
    
}

export default Form.create()(PersonalInfo);