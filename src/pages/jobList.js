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
        jobList: []
    }

    async componentDidMount() {
        const data = await API.graphql(graphqlOperation(listPostedJobs))
        this.setState({
            jobList: data.data.listPostedJobs.items
        })
        console.log(this.state.jobList)
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