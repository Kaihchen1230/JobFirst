import React from 'react';
import { Tabs, Table, Button } from 'antd';
import { getUser } from '../../services/auth';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';

const TabPane = Tabs.TabPane;

const columns = [{
    title: 'Job',
    dataIndex: 'job',
    key: 'job',
}, {
    title: 'Date Applied',
    dataIndex: 'dateApplied',
    key: 'dateApplied',
}, {
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
}];

const fakeAppliedJobObject = {
    //Employee: Employee object
    //Job: PostedJob
    //dateApplied: String
    //status: String
    dateApplied: "today",
    status: "pending"
}

class Information extends React.Component {

    state = {
        theJobs: []
    }

    componentDidMount = async () => {
        const user = await Auth.currentAuthenticatedUser();
        const { attributes } = user;
        const userID = attributes.sub;
        // fetch all relevant jobs and save to state to render to page
        try {
            // This query needs to be modified so that it calls queries.getAppliedJob(id: id) where id is the user id (need to figure out how to pass this in)
                //let fetchAllAppliedJobs = await API.graphql(graphqlOperation(queries.listAppliedJobs));
            let fetchAllAppliedJobs = await API.graphql(graphqlOperation(queries.getAppliedJob, { id: userID }));
            console.log("results: ", fetchAllAppliedJobs.data);
            //if (fetchAllAppliedJobs.data.listAppliedJobs.items.length == 0) {
            //    console.log("There are no jobs to be fetched.");
            //}
            //else {
            //    console.log("The following jobs were fetched:\n", fetchAllAppliedJobs.data.listAppliedJobs.items);
            //}
            //this.setState({ theJobs: fetchAllAppliedJobs.data.listAppliedJobs.items });
        } catch (err) {
            console.log("The error is ", err);
        }
    }

    callback = (key) => {
        console.log(key);
    }

    render() {
        const user = getUser();
        console.log("The current user's information:", user);
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="General Info" key="1">
                        <div>
                            First Name: {user.name}
                            <br />
                            Last Name: {user.lastName}
                            <br />
                            Age: {user.age}
                            <br />
                        </div>

                    </TabPane>

                    <TabPane tab="Education and Award" key="2">Content of Tab Pane 2</TabPane>

                    <TabPane tab="Experience and Skills" key="3">Content of Tab Pane 3</TabPane>

                    <TabPane tab="Applied Jobs" key="4">Content of Tab Pane 4
                        <h1 align="center">Applied Jobs</h1>
                        {this.state.theJobs.length > 0 ? (
                            <Table dataSource={this.state.theJobs} columns={columns} />
                        ) : <h1 align="center">You haven't applied to any jobs yet.</h1>
                        }
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default Information;