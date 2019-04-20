import { Button, Modal, Form, Input, Radio, Icon } from 'antd';
import React from 'react';
import { navigate } from "gatsby"
import { isLoggedIn, setUser, getUser } from "../../services/auth"
import { I18n, Auth } from 'aws-amplify';
import 'antd/dist/antd.css';
import './login.css';



const LoginForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const {
        visible, onCancel, onLogin, form,
      } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Login"
          okText="Login"
          onCancel={onCancel}
          onOk={onLogin}
        >
          <Form layout="vertical" className='login-form'>
            <Form.Item label="Username">
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </Form.Item>
            <Form.Item label="Password">
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </Form.Item>
            <Form.Item>
              <a href="">register now!</a>
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class NewLogin extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleLogin = async() => {
    const form = this.formRef.props.form;
    form.validateFields(async(err, values) => {
      if (err) {
        return;
      }
      // console.log('Received values of form: ', values);
      const { userName, password } = values;
      // console.log(userName, password);
      try {
        await Auth.signIn(userName, password)
        const user = await Auth.currentAuthenticatedUser();
        //console.log("user data is", user);
        const userInfo = {
          ...user.attributes,
          username: user.username,
          language: "es"
        }
        // const test = await Auth.userAttributes(user);
        //console.log(test)
        setUser(userInfo)
        userInfo['custom:isEmployer'] === 'no' ? navigate("/app/user-profile/" + userInfo.username) : navigate("/app/business-profile")
      } catch (err) {
        this.setState({ error: err })
        console.log('error....: ', err)
      }
      form.resetFields();
      this.setState({ visible: false });
    });
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Login</Button>
        <LoginForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onLogin={this.handleLogin}
        />
      </div>
    );
  }
}

export default NewLogin;