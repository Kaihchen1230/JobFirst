import React from "react"
import { Link, navigate } from "gatsby";
import { Auth } from "aws-amplify";
import { Menu, Icon, Avatar, Button, Modal, Form, Input, Checkbox } from 'antd';
import { isLoggedIn, setUser, getUser, logout } from "../services/auth"
import { I18n } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react'
import NewLogin from './authentication/new_login';
import dict from "./dictionary/dictionary";

const navBar = (props) => {
  const state = {
    login:
      <span>
        {/* <Avatar shape="square" size="large" icon="user" /> */}
        <NewLogin />
      </span>,
  };
  let lan = window.localStorage.getItem('lan')
  // the login button should change based on the user
  if (isLoggedIn()) { // if logged in we can display the username
    state.login =
      <span>
        <Avatar shape="square" size="large" icon="user" />
        <span>{"   " + getUser().username}</span>
      </span>
  }
  I18n.putVocabularies(dict);
  I18n.setLanguage(lan);
  const style = {
      fontSize: "25px"

  };

  return (
    <Menu
      mode="horizontal"
      theme="dark"
      style={{ position: "sticky", top: "0", zIndex:1}}
    >
      <Menu.Item  key="home" >
        <Icon type="home" theme="outlined" style={{style}}/>
          {I18n.get('Home')}
          <Link to="/"></Link>
      </Menu.Item>


      <Menu.Item key="about">
        <Icon type="solution" theme="outlined" />{I18n.get('View Job')}
          <Link to="/app/job-list"></Link>
      </Menu.Item>

      <Menu.Item>
        <Icon type="file-add" theme="outlined" />{I18n.get('Post a New Job')}
        <Link to="/app/postJob"></Link>
      </Menu.Item>

      <Menu.Item>
        <Icon type="bar-chart" theme="outlined" />{I18n.get('Business Profile')}
        <Link to="/app/business-profile"></Link>
      </Menu.Item>


      <Menu.Item key="contact">
        <Icon type="mail" theme="outlined" />{I18n.get('Contact Us')}
        </Menu.Item>


      {!isLoggedIn() ? (
        <Menu.Item key="register">
          <Icon type="form" theme="outlined" />{I18n.get('Register')}
            <Link to="/app/signup"></Link>
        </Menu.Item>) : null}


      <Menu.Item>
        <Button ghost="true" onClick={() => {
          window.localStorage.setItem('lan', 'es');
          window.location.reload();
        }}>ENGLISH - 英语</Button>
      </Menu.Item>

      <Menu.Item>
        <Button ghost="true" onClick={() => {
          window.localStorage.setItem('lan', 'ch');
          window.location.reload();
        }}>CHINESE - 中文</Button>
      </Menu.Item>


      <Menu.Item>
        {state.login}
      </Menu.Item>



      {/* if logged in, then display log out button */}
      {isLoggedIn() ? (
        <Menu.Item
          key="logout"
          onClick={event => {
            Auth.signOut()
              .then(logout(() => navigate(`/`)))
              .catch(err => console.log('error: ', err))
          }}>
          <Icon type="logout" theme="outlined" />Logout
            </Menu.Item>
      ) : null}
    </Menu>
  );
}

export default navBar;
