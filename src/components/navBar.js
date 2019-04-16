import React from "react"
import { Link, navigate } from "gatsby";
import { getUser, isLoggedIn, logout } from '../services/auth';
import { Auth } from "aws-amplify";
import { Menu, Icon, Avatar, Button } from 'antd';
import { I18n } from 'aws-amplify';
import dict from "./dictionary/dictionary";

const navBar = (props) => {
  const state = {
    login:
      <span>
        <Icon type="login" theme="outlined" />
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
        <Icon type="login" theme="outlined" />
        <span> Log in </span>
      </span>
  }
  
  return (
    <Menu
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="home">
        <Icon type="home" theme="outlined" />Home
        <Link to="/"></Link> 
      </Menu.Item>
      <Menu.Item key="about">
        <Icon type="solution" theme="outlined" />View Job
        <Link to="/app/job-list"></Link>
      </Menu.Item>
      <Menu.Item>
        <Icon type="file-add" theme="outlined" />Post a New Job
        <Link to="/app/postJob"></Link>
      </Menu.Item>
      <Menu.Item>
        <Icon type="bar-chart" theme="outlined" />Business Profile
        <Link to="/app/business-profile"></Link>
      </Menu.Item>   
      <Menu.Item>

        <Icon type="user" theme="outlined" />User Profile
        <Link to="/app/user-profile/userID"></Link>
      </Menu.Item>   
      {!isLoggedIn() ? (
      <Menu.Item key="register">
        <Icon type="form" theme="outlined" />Register
        <Link to="/app/signup"></Link>
      </Menu.Item>):null}
      <Menu.Item>
        <Button ghost="true" onClick={() => {
          I18n.putVocabularies(dict);
          window.localStorage.setItem('lan', 'es');
          window.location.reload();
        }}>ENGLISH</Button>
      </Menu.Item>
      <Menu.Item>
        <Button ghost="true" onClick={() => {
          I18n.putVocabularies(dict);
          window.localStorage.setItem('lan', 'ch');
          window.location.reload();
        }}>中文</Button>
      </Menu.Item>
      <Menu.Item key="login">
        <Link to="/app/login">{state.login}</Link>
      </Menu.Item>
      {isLoggedIn() ? (
          <Menu.Item 
            key="logout"
            onClick={event => {
              Auth.signOut()
                .then(logout(() => navigate(`/app/login`)))
                .catch(err => console.log('error: ', err))
            }}>
            <Icon type="logout" theme="outlined" />Logout
          </Menu.Item>
      ) : null}
      <Menu.Item>
        <Button ghost="true" onClick={() => {
          window.localStorage.setItem('lan', 'es');
          window.location.reload();
        }}>ENGLISH</Button>
      </Menu.Item>
      <Menu.Item>
        <Button ghost="true" onClick={() => {
          window.localStorage.setItem('lan', 'ch');
          window.location.reload();
        }}>中文</Button>
      </Menu.Item>
    </Menu>
  );
}

export default navBar;
