import React from "react"
import { Link, navigate } from "gatsby";
import { getUser, isLoggedIn, logout } from '../services/auth';
import { Auth } from "aws-amplify";
import { Menu, Icon, Avatar, Button } from 'antd';

const navBar = (props) => {
  const state = {
    login:
      <span>
        <Avatar shape="square" size="large" icon="user" />
        <span> Log in </span>
      </span>
  }
  if (isLoggedIn()) {
    state.login =
        <span>
          <Avatar shape="square" size="large" icon="user" />
          <span>{getUser().username}</span>
        </span>
  } else {
    state.login =
      <span>
        <Avatar shape="square" size="large" icon="user" />
        <span> Log in </span>
      </span>
  }
  localStorage.setItem('lan', 'ch');
//<Link to={window.location.pathname.slice(0, window.location.pathname.length - 3) + "/ch"}></Link>
  return (
    <Menu
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="home">
        <Icon type="home" theme="twoTone" />Home
        <Link to="/app/main"></Link> 
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
        <Link to="/app/postJob/es"></Link>
      </Menu.Item>
      <Menu.Item>
        <Icon type="profile" theme="twoTone" />ENGLISH
        <Link to={window.location.pathname.slice(0, window.location.pathname.length - 3) + "/es"}></Link>
      </Menu.Item>
      <Menu.Item>
        <Icon type="profile" theme="twoTone" />中文
        <Button ghost="true" onClick={() => localStorage.setItem('lan', 'ch')}>h</Button>
      </Menu.Item>
      <Menu.Item key="login">
        <Link to="/app/user-profile">{state.login}</Link>
      </Menu.Item>
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

export default navBar;
