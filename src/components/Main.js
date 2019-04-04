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
        <Carousel autoplay>
          <div><h1 style={bodyStyle}>1</h1></div>
          <div><h1 style={bodyStyle}>2</h1></div>
          <div><h1 style={bodyStyle}>3</h1></div>
          <div><h1 style={bodyStyle}>4</h1></div>
        </Carousel>,
      </container>
    );
  }
}
export default Main;