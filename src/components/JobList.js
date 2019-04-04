import React from "react"
import { Menu, Icon, Button, Card, Layout, Row, Col, Input, Tabs } from 'antd';

const SubMenu = Menu.SubMenu;
const Search = Input.Search;
const TabPane = Tabs.TabPane;

const {
  Header, Footer, Sider, Content,
} = Layout;

class JobList extends React.Component {
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
      <div>
        <Layout>
          <Header>
            <Row>
              <Col span={12}>
              <Tabs defaultActiveKey="1">
              <TabPane tab="Main Page" key="1">Main Page</TabPane>
              <TabPane tab="Profile" key="2">Profile</TabPane>
              <TabPane tab="Login" key="3">Login</TabPane>
            </Tabs>
              </Col>
              <Col span={12}>
              <Search
              placeholder="input search text"
              enterButton="Search"
              size="large"
              onSearch={value => console.log(value)}
            />
              </Col>
            </Row>
          </Header>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Layout>
              <Sider>
                <div style={{ width: 256 }}>
                  <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                  </Button>
                  <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                  >
                    <Menu.Item key="1">

                      <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">

                      <span>Option 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">

                      <span>Option 3</span>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span>Navigation One</span>}>
                      <Menu.Item key="5">Option 5</Menu.Item>
                      <Menu.Item key="6">Option 5</Menu.Item>
                      <Menu.Item key="7">Option 5</Menu.Item>
                    </SubMenu>
                  </Menu>
                </div>
              </Sider>
              <Content style={{ padding: '20px 60px', minHeight: 280 }}>
                <div>
                  <Card title="Job title">
                    <p>Job Content</p>
                    <p>Job Content</p>
                    <p>Job Content</p>
                  </Card>
                  <Card title="Job title">
                    <p>Job Content</p>
                    <p>Job Content</p>
                    <p>Job Content</p>
                  </Card>
                  <Card title="Job title">
                    <p>Job Content</p>
                    <p>Job Content</p>
                    <p>Job Content</p>
                  </Card>
                  <Card title="Job title">
                    <p>Job Content</p>
                    <p>Job Content</p>
                    <p>Job Content</p>
                  </Card>
                  <Card title="Job title">
                    <p>Job Content</p>
                    <p>Job Content</p>
                    <p>Job Content</p>
                  </Card>
                  <Card title="Job title">
                    <p>Job Content</p>
                    <p>Job Content</p>
                    <p>Job Content</p>
                  </Card>
                </div>
              </Content>
            </Layout>

            <Footer>

            </Footer>
          </Layout>
        </Layout>
      </div>

    );
  }
}
export default JobList;