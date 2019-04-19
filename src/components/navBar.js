import React from "react"
import { Link, navigate } from "gatsby";
import { Auth } from "aws-amplify";
import { Menu, Icon, Avatar, Button, Modal, Form, Input, Checkbox } from 'antd';
import { isLoggedIn, setUser, getUser, logout } from "../services/auth"
import { I18n } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react'
import NewLogin from './authentication/new_login';

class navBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      visible: false,
      username: ``,
      password: ``,
      error: ``,
      language: 'es',
      login: false,
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  // cancel the login
  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        form.resetFields();
        this.setState({ visible: false });
        return;
      }
      else {
        console.log('Received values of form: ', values);
        this.handleLogin();
        form.resetFields();
        this.setState({ visible: false });
      }
    });
  }

  handleLogin = async () => {
    const { username, password } = this.state;
    try {
      await Auth.signIn(username, password)
      const user = await Auth.currentAuthenticatedUser();
      const userInfo = {
        ...user.attributes,
        username: user.username,
        language: "es"
      }
      setUser(userInfo)
        (userInfo['custom:isEmployer'] === 'no') ? navigate(`/app/user-profile/${userInfo.username}`) : navigate("/app/business-profile")
    } catch (err) {
      this.setState({ error: err })
      console.log('error....: ', err)
    }
  }

  saveFormRef = (form) => {
    this.form = form;
  }

  render() {
    const { visible, loading } = this.state;
    // the login button should change based on the user
    let loginButton = 
        <span>
          <Avatar shape="square" size="large" icon="user" />
          <span> Log in </span>
        </span>
    if (isLoggedIn()) { // if logged in we can display the username
      loginButton =
        <span>
          <Avatar shape="square" size="large" icon="user" />
          <span>{getUser().username}</span>
        </span>
    } else {
      loginButton =
        <span>
          <Avatar shape="square" size="large" icon="user" />
          <span> Log in </span>
        </span>
    }

    return (
      <Menu
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="home">
          <Icon type="home" theme="twoTone" />Home
          <Link to="/"></Link>
        </Menu.Item>


        <Menu.Item key="about">
          <Icon type="profile" theme="twoTone" />View Job
          <Link to="/app/job-list"></Link>
        </Menu.Item>


        <Menu.Item key="contact">
          <Icon type="mail" theme="twoTone" />Contact us
        </Menu.Item>


        <Menu.Item key="register">
          <Icon type="mail" theme="twoTone" />Register
          <Link to="/app/signup"></Link>
        </Menu.Item>


        <Menu.Item>
          <Icon type="profile" theme="twoTone" />Post a New Job
          <Link to="/app/postJob"></Link>
        </Menu.Item>


        <Menu.Item>
          <Button ghost="true" onClick={() => {
            localStorage.setItem('lan', 'es');
            window.location.reload();
          }}>ENGLISH</Button>
        </Menu.Item>


        <Menu.Item>
          <Button ghost="true" onClick={() => {
            localStorage.setItem('lan', 'ch');
            window.location.reload();
          }}>中文</Button>
        </Menu.Item>


        <Menu.Item>
          <NewLogin />
        </Menu.Item>
        
        

        {/* if logged in, then display log out button */}
        {isLoggedIn() ? (
          <Menu.Item
            key="logout"
            onClick={event => {
              Auth.signOut()
                .then(logout(() => navigate(`/app/login`)))
                .catch(err => console.log('error: ', err))
            }}>
            <Icon type="close-circle" theme="twoTone" />Logout
            </Menu.Item>
        ) : null}
      </Menu>
    );
  }
}

export default navBar;
