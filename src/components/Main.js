import React from "react"
import { Menu, Icon, Button, Carousel } from 'antd';

const SubMenu = Menu.SubMenu;

let bodyStyle = {
  textAlign: 'center',
  margin: '50px 50px 0 50px',
  height: '400px',
  lineHeight: '400px',
  background: '#364d79',
  color: 'white',
  overflow: 'hidden'
}
class Main extends React.Component {
  state = {

  }

  render() {
    return (
      <container>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['Jobs']}
        >
          <Menu.Item key='Jobs'>Jobs</Menu.Item>
          <Menu.Item key='Login'>Login</Menu.Item>
        </Menu>
        <Carousel autoplay>
          <div><h1 style={bodyStyle}>Welcome to JobFirst</h1></div>
          <div><h1 style={bodyStyle}>Rapid Growth of Chinese Entrepreneurship</h1></div>
          <div><h1 style={bodyStyle}>Looking for Talents that Speak Chinese</h1></div>
          <div><h1 style={bodyStyle}>Find the Job that Matches Your Talent</h1></div>
        </Carousel>,
      </container>
    );
  }
}
export default Main;