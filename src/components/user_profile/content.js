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
    dateApplied: "it was today",
    status: "it is pending"
}

class Information extends React.Component {

    state = {
        theJobs: []
    }

    componentDidMount = async () => {
        // Get user information using Auth
        const user = await Auth.currentAuthenticatedUser();
        const { attributes } = user;
        const userID = attributes.sub;
        const randomID = "58560a0d-6569-421e-9c33-069ed18c08d0"

        // Add one applied job for testing
        try {
            fakeAppliedJobObject.id = randomID;
            const newAppliedJob = await API.graphql(graphqlOperation(mutations.createAppliedJob, {input: fakeAppliedJobObject}));
            console.log("the job was added");
        } catch(err) {
            console.log("error - job was not added or it already exists");
        }

        // fetch all relevant jobs and save to state to render to page
        try {
            // we can fetch an applied job by id now. But now we have to filter it by the employee id which returns results specific to the user
            let fetchAllAppliedJobs = await API.graphql(graphqlOperation(queries.getAppliedJob, { id: userID }));
            if (fetchAllAppliedJobs.data == null) {
                console.log("There are no jobs to be fetched.");
            }
            else {
                console.log("The following job was fetched:\n", fetchAllAppliedJobs.data.getAppliedJob);
            }
            this.setState({ theJobs: [...fetchAllAppliedJobs.data.getAppliedJob] });
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