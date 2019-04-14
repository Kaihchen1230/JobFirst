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
          <span>{"   " + getUser().username}</span>
        </span>
  } else {
    state.login =
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
        <Link to="/app/main"></Link> 
      </Menu.Item>
      <Menu.Item key="about">
        <Icon type="profile" theme="twoTone" />View Job
        <Link to="/app/job-list"></Link>
      </Menu.Item>
      <Menu.Item>
        <Icon type="profile" theme="twoTone" />Post a New Job
        <Link to="/app/postJob"></Link>
      </Menu.Item>
      <Menu.Item>
        <Icon type="profile" theme="twoTone" />Business Profile
        <Link to="/app/business-profile"></Link>
      </Menu.Item>   
      <Menu.Item>
        <Icon type="profile" theme="twoTone" />User Profile
        <Link to="/app/user-profile"></Link>
      </Menu.Item>   
      {!isLoggedIn() ? (
      <Menu.Item key="register">
        <Icon type="mail" theme="twoTone" />Register
        <Link to="/app/signup"></Link>
      </Menu.Item>):null}
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
