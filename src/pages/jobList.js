import React from 'react';
import { generate } from 'randomstring';
import { Layout } from 'antd';
import JobItem from '../components/jobList/jobItem';
import SideBar from '../components/jobList/sideBar';
import { graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import { Connect } from "aws-amplify-react";

const {
    Header, Footer, Sider, Content,
} = Layout;

class JobList extends React.Component {
    state = {
    }

    render() {
        return (
            <container>
                <Layout>
                    <Header>
                        <SideBar />
                    </Header>
                </Layout>
                <Layout>
                    <Content>
                        <Connect query={graphqlOperation(queries.listPostedJobs)}>
                            {({ data: { listPostedJobs }, loading, error }) => {
                                if (error) return (<h3>ERROR</h3>);
                                if (loading || !listPostedJobs) return (<h3>Loading...</h3>);
                                return (<JobItem jobs={listPostedJobs.items} />);
                            }}
                        </Connect>
                    </Content>
                </Layout>

            </container>

        );
    }
}

export default JobList;