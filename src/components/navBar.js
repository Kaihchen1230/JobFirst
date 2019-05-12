import React from "react"
import { Link, navigate } from "gatsby";
import { Auth } from "aws-amplify";
import { Menu, Icon, Avatar, Button, Dropdown, Layout } from 'antd';
import { isLoggedIn, setUser, getUser, logout } from "../services/auth"
import { I18n } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react'
import NewLogin from './authentication/new_login';
import dict from "./dictionary/dictionary";
import { setLanguage, getLanguage } from "../services/auth";
import "../style/nav.css"
import Logo from '../../static/logo.png';

const { Header, Content, Footer } = Layout;
const navBar = (props) => {
  const state = {
    login:
      /* <Avatar shape="square" size="large" icon="user" /> */
      <NewLogin />
  };
  // let lan = window.localStorage.getItem('lan')
  // the login button should change based on the user
  if (isLoggedIn()) { // if logged in we can display the username
    state.login =
      <span>
        <Avatar 
          style={{ margin:"5px 0" }}
          shape="square" 
          size={38} 
          src ="https://gifimage.net/wp-content/uploads/2018/11/user-gif-4.gif" />
        <span style={{position:"relative", top:"0.4vw"}}>{"   " + getUser().username}</span>
      </span>
  }
  I18n.putVocabularies(dict);
  I18n.setLanguage(getLanguage());
  const style = {
    fontSize: "25px"

  };

  const language_menu = (
    <Menu>
      <Menu.Item>
        <Button id="english-button" style={{color:"#1BB28B", border:"1px solid #1BB28B"}} onClick={()=> {setLanguage('es')}}>ENGLISH - 英语</Button>
      </Menu.Item>

      <Menu.Item>
        <Button id="chinese-button" style={{background:"#1BB28B",color:"white", border:"1px solid #1BB28B"}} onClick={()=> {setLanguage('ch')}}>CHINESE - 中文</Button>
      </Menu.Item>
      {/* <Menu.Item>
        <Button id="chinese-button" type="primary" onClick={() => {
          // window.localStorage.setItem('lan', 'ch');
          // window.location.reload();
        }}>CHINESE - 中文</Button>
      </Menu.Item> */}
    </Menu>
  )

  return (
    <Layout align="center">
      <Header style={{ position: 'fixed', width: '100%', height: '30px', zIndex: 1, padding: "5px 0" }}>
        <img src = {Logo} style={{width:"13%", position:"absolute", left:"0%"}}></img>
        <Menu
          mode="horizontal"
          theme="dark"
          style={{textAlign: "right"}}
        >
          <Menu.Item key="home" >
            {I18n.get('Home')}
            <Link to="/"></Link>
          </Menu.Item>

          <Menu.Item key="about">
            {I18n.get('View Job')}
            <Link to="/app/job-list"></Link>
          </Menu.Item>

          {isLoggedIn() ? 
            getUser()["custom:isEmployer"] === "yes" ?
              <Menu.Item>
                {I18n.get('Post a New Job')}
                <Link to="/app/postJob"></Link>
              </Menu.Item>: null : null
          }

          {/* <Menu.Item>
            <Icon type="bar-chart" theme="outlined" />{I18n.get('Business Profile')}
            <Link to="/app/business-profile"></Link>
          </Menu.Item> */}

          <Menu.Item key="contact">
            {I18n.get('Contact Us')}
            <Link to="/app/contact"></Link>
          </Menu.Item>


          {!isLoggedIn() ? (
            <Menu.Item>
              <Link to="/app/signup">
                <Button style={{backgroundColor:"#1BB28B"}} type="primary">{I18n.get('Register')}</Button>
              </Link>
            </Menu.Item>
          ) : null
          }

          {isLoggedIn() ? (
            getUser()['custom:isEmployer'] ==='no' ?
              <Menu.Item>
                {state.login}
                <Link to={`/app/user-profile/${getUser().sub}`}></Link>
              </Menu.Item> :
              <Menu.Item>
                {/* <Icon type="bar-chart" theme="outlined" />{I18n.get('Business Profile')} */}
                {state.login}
                <Link to={`/app/business-profile/${getUser().sub}`}></Link>
              </Menu.Item>
          ) : (
              <Menu.Item>
                {state.login}
              </Menu.Item>
            )}

          {/* if logged in, then display log out button */}
          {isLoggedIn() ? (
            <Menu.Item
              key="logout"
              onClick={event => {
                Auth.signOut()
                  .then(logout(() => navigate(`/`)))
                  .catch(err => console.log('error: ', err))
              }}>
              {I18n.get('Logout')}
        </Menu.Item>
          ) : null}

          <Menu.Item>
            <Dropdown overlay={language_menu}>
              <Button id="lanButton" style={{color:"#1BB28B", border:"1px solid #1BB28B"}}>
                      {I18n.get('Language')}</Button>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </Header>
      <div style={{ marginTop: "51px" }}>
      </div>

    </Layout>
  );
}

export default navBar;
