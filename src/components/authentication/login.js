import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn, setUser, getUser } from "../../services/auth"
import { I18n } from 'aws-amplify';
import { Auth } from "aws-amplify"
import { withAuthenticator } from 'aws-amplify-react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './login.css';

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
    error: ``,
    language:'es'
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      } else {
        this.handleLogin();
      }
    });
  }

  // handleSubmit = event => {
  //   event.preventDefault()
  //   this.handleLogin()
  // }

  handleLogin = async() => {
    const { username, password } = this.state;
    try {
      await Auth.signIn(username, password)
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
      (userInfo['custom:isEmployer'] === 'no') ? navigate("/app/user-profile/" + userInfo.username) : navigate("/app/business-profile")
    } catch (err) {
      this.setState({ error: err })
      console.log('error....: ', err)
    }
  }

  render() {
    I18n.setLanguage(this.state.language);
    if (isLoggedIn()) {
      const userInfo = getUser();
      // TODO if user has no profile, ask them to fill up basic info after sign in
      //(userInfo['custom:isProfile']) === 'no') ? 
      (userInfo['custom:isEmployer'] === 'no') ? navigate("/app/user-profile/"  + userInfo.username) : navigate("/app/business-profile")
    }
    const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      );
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
export default WrappedNormalLoginForm;
