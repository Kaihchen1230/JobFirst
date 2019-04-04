import React from 'react';
import {generate} from 'randomstring';
import { Card, Col, Row, Button, Input, Tabs, Layout, Menu } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';

const {
    Header, Footer, Sider, Content,
  } = Layout;
  

class JobList extends React.Component{

    state = {
        jobList: [
            {
                id: generate(10),
                campanyName: 'Alibaba',
                description: 'Sit aliquip laboris proident adipisicing tempor esse non do non. Consectetur sunt incididunt dolore labore velit incididunt laborum excepteur non incididunt cillum reprehenderit. Exercitation minim reprehenderit et officia culpa laboris consequat. Aliqua minim duis ipsum voluptate consectetur dolore deserunt sint veniam consectetur pariatur adipisicing irure.'
            }, 
            {
                id: generate(10),
                campanyName: 'Alibaba',
                description: 'Sit aliquip laboris proident adipisicing tempor esse non do non. Consectetur sunt incididunt dolore labore velit incididunt laborum excepteur non incididunt cillum reprehenderit. Exercitation minim reprehenderit et officia culpa laboris consequat. Aliqua minim duis ipsum voluptate consectetur dolore deserunt sint veniam consectetur pariatur adipisicing irure.'
            },
            {
                id: generate(10),
                campanyName: 'Tencent',
                description: 'Sit aliquip laboris proident adipisicing tempor esse non do non. Consectetur sunt incididunt dolore labore velit incididunt laborum excepteur non incididunt cillum reprehenderit. Exercitation minim reprehenderit et officia culpa laboris consequat. Aliqua minim duis ipsum voluptate consectetur dolore deserunt sint veniam consectetur pariatur adipisicing irure.'
            },
            {
                id: generate(10),
                campanyName: 'Baidu',
                description: 'Sit aliquip laboris proident adipisicing tempor esse non do non. Consectetur sunt incididunt dolore labore velit incididunt laborum excepteur non incididunt cillum reprehenderit. Exercitation minim reprehenderit et officia culpa laboris consequat. Aliqua minim duis ipsum voluptate consectetur dolore deserunt sint veniam consectetur pariatur adipisicing irure.'
            },
            {
                id: generate(10),
                campanyName: 'Ant Fnancial',
                description: 'Sit aliquip laboris proident adipisicing tempor esse non do non. Consectetur sunt incididunt dolore labore velit incididunt laborum excepteur non incididunt cillum reprehenderit. Exercitation minim reprehenderit et officia culpa laboris consequat. Aliqua minim duis ipsum voluptate consectetur dolore deserunt sint veniam consectetur pariatur adipisicing irure.'
            },
            {
                id: generate(10),
                campanyName: 'Xiaomi',
                description: 'Sit aliquip laboris proident adipisicing tempor esse non do non. Consectetur sunt incididunt dolore labore velit incididunt laborum excepteur non incididunt cillum reprehenderit. Exercitation minim reprehenderit et officia culpa laboris consequat. Aliqua minim duis ipsum voluptate consectetur dolore deserunt sint veniam consectetur pariatur adipisicing irure.'
            }
            
        ]
    }

    

    render(){
        let jobItem = this.state.jobList.map((item, index) => 
            <Col span = {8} style = {{margin: '10px 0'}}>
                <Card title = {item.campanyName} bordered = {true}>
                    <p>{item.description}</p>
                    <div align = "center">
                        <Button type="primary" ghost>Apply</Button>
                    </div>
                </Card>
            </Col>
        );
        return(
            <container>
                <Layout>
                    <Header>
                        <Menu
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                        >
                            <Menu.Item key='Home'>Home</Menu.Item>
                            <Menu.Item key='Login'>Login</Menu.Item>
                        </Menu>
                    </Header>
                    <Layout>
                        
                    </Layout>
                </Layout>
                <div style={{ background: '#ECECEC', padding: '30px', height: '1000px'}}>
                <h1 align = "center">Welcome to Our Job Pool</h1>
                    <Row gutter={16}>
                    {jobItem}
                    </Row>
                    
                </div>
            </container>
            
        );
    }
}

export default JobList;