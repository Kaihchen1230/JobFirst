import React from 'react';
import { generate } from 'randomstring';
import { Layout } from 'antd';
import JobItem from '../components/jobList/jobItem';
import SideBar from '../components/jobList/sideBar';
import { API, graphqlOperation } from 'aws-amplify';
import { listPostedJobs } from '../graphql/queries';

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
        ],
        testing: []
    }

    async componentDidMount() {
        const data = await API.graphql(graphqlOperation(listPostedJobs))
        this.setState({
            testing: data.data.listPostedJobs.items
        })
        console.log(this.state.testing)
    }
    render() {
        return (
            <container>
                <Layout>
                    <Sider>
                        <SideBar />
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