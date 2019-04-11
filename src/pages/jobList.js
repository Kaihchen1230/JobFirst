import React from 'react';
import { generate } from 'randomstring';
import { Card, Col, Row, Button, Input, Tabs, Layout, Menu } from 'antd';
import JobItem from '../components/jobList/jobItem';
import SideBar from '../components/jobList/sideBar';

const Search = Input.Search;
const {
    Header, Footer, Sider, Content,
} = Layout;


class JobList extends React.Component {

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



    render() {
        return (
            <container>
                <Layout>
                    <Sider>
                        <SideBar />
                        {/* <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            enterButton
                        />
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                        >
                            <Menu.Item key='1'>15 days</Menu.Item>
                            <Menu.Item key='2'>One month</Menu.Item>
                            <Menu.Item key='3'>Three month</Menu.Item>
                            <Menu.Item key='4'>All</Menu.Item>
                        </Menu> */}
                    </Sider>
                    <Content>
                        <JobItem jobs={this.state.jobList} />
                    </Content>
                </Layout>

            </container>

        );
    }
}

export default JobList;