import React from "react"
import { Menu, Icon, Button } from 'antd';

const SubMenu = Menu.SubMenu;

class Main extends React.Component {
    state = {
        collapsed: false,
      }
    
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }
    
      render() {
        return (
          <div class="container">
          </div>
        );
      }
}
export default  Main;