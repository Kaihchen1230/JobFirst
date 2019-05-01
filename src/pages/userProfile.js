import React from 'react';
import Person from '../components/user_profile/sidebar';
import Information from '../components/user_profile/content';
import Amplify, { API, graphqlOperation, I18n } from "aws-amplify";
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import { getUser, isLoggedIn } from '../services/auth';
import { Layout, Skeleton, Menu, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: this.props.userID,
            loading: true,
            collapsed: false,
            theJobs: []
        }
    }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    componentDidMount = async () => {
        // fetch the user info
        try {
            // console.log(this.props.userID);
            const user = await API.graphql(graphqlOperation(queries.getEmployee, { id: this.state.userID }));
            console.log(user);
            this.setState({
                user: user.data.getEmployee,
                loading: false
            })
        } catch (err) {
            console.log("From userProfile.js - error in getting the user's information", err);
        }

<<<<<<< HEAD
        // Fetch all relevant jobs and save to state to render to page
        try {
            // We can fetch an applied job by id now. But now we have to filter it by the employee id which returns results specific to the user
            let fetchAllAppliedJobs = await API.graphql(graphqlOperation(queries.getAppliedJob, { id: this.state.userID }));
            console.log("From userProfile.js - The following job was fetched:\n", fetchAllAppliedJobs.data.getAppliedJob);
            this.setState({ theJobs: [...fetchAllAppliedJobs.data.getAppliedJob] });
=======
        // What to pass in when creating applied job objects. The id parameter must be different each time
        const appliedJobInput = {
            id: "54160v2d-7469-411e-9b53-012ed15c97d0",
            dateApplied: "right this MOMENT",
            status: "got it YET AGAIN",
            appliedJobEmployeeId: "59560b0d-6069-431e-9b33-079ed12c08f0",   // my user id
            appliedJobJobId: "54563b0d-7069-411e-9n33-049ed15c02f0"
        }

        const postedJobInput = {
            id: "54563b0d-7069-411e-9n33-049ed15c02f0",
            jobTitle: "Front End Developer",
            jobType: "Management"
        }
        /*
        // Attempt to add one posted job for testing
        try {
            const newPostedJob = await API.graphql(graphqlOperation(mutations.createPostedJob, {input: postedJobInput}));
            console.log("From userProfile.js - The test posted job was added");
        } catch(err) {
            console.log("From userProfile.js - Error: ", err);
        }

        // Attempt to add one applied job for testing
        try {
            const newAppliedJob = await API.graphql(graphqlOperation(mutations.createAppliedJob, {input: appliedJobInput}));
            console.log("From userProfile.js - The test applied job was added");
        } catch(err) {
            console.log("From userProfile.js - Error: ", err);
        }*/

        // Fetch all relevant jobs and save to state to render to page
        try {
            // We can fetch an applied job by id now. But now we have to filter it by the employee id which returns results specific to the user
            let fetchAllAppliedJobs = await API.graphql(graphqlOperation(queries.listAppliedJobs));
            if (fetchAllAppliedJobs == null) {
                console.log("From userProfile.js - There are no jobs to be fetched.");
            }
            else {
                console.log("From userProfile.js - The following jobs were fetched:\n", fetchAllAppliedJobs.data.listAppliedJobs.items);
            }

            // Parse and filter jobs
            let j = [];
            let arr = new Array(...fetchAllAppliedJobs.data.listAppliedJobs.items);
            j.push(arr[2]);
            j.push(arr[6]);
            j.push(arr[8]);
            console.log(arr.length);

            // Below is the general code to filter applied jobs
            
            //for (let i = 0; i < arr.length; ++i) {
            //    if (arr[i].Employee.id == this.state.userID) {
            //        j.push(arr[i]);
            //    }
            //}

            this.setState({ theJobs: j });
>>>>>>> 151b20d8df9640b06ec984a23dd5371aeb71888f
        } catch (err) {
            console.log("From userProfile.js - error in getting list of jobs: ", err);
        }

    }

    render() {
        if (this.state.loading) {
            return (
                <Skeleton active />
            );
        }
        //console.log(this.state.user);
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                    width={300}
                >
                    <Person user={this.state.user} />
<<<<<<< HEAD
                    {(getUser().sub === this.state.userID) ?(
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="form" /><span>{I18n.get('Edit Profile')}</span></span>}
                        >
                            <Menu.Item key="3">
                                {I18n.get('Modify Basic Info')}
                            </Menu.Item>

                            <Menu.Item key="4">
                                {I18n.get('Update address')}
                            </Menu.Item>

                            <Menu.Item key="5">
                                {I18n.get('Add Education or Award')}
                            </Menu.Item>
                            
                            <Menu.Item key="6">
                                {I18n.get('Add Experience or Skill')}
                            </Menu.Item>
                        </SubMenu>

                        <Menu.Item key="2">
                            <Icon type="picture" />
                            <span>{I18n.get('Change Profile Picture')}</span>
                        </Menu.Item>
                        
                        <Menu.Item key="9">
                            <Icon type="file" />
                            <span>{I18n.get('Upload a Resume')}</span>
                        </Menu.Item>
                    </Menu>): null
=======
                    {(getUser().sub === this.state.userID) ? (
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <Icon type="form" />
                                <span>{I18n.get('Edit Profile')}</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="picture" />
                                <span>{I18n.get('Change Profile Picture')}</span>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={<span><Icon type="user" /><span>{I18n.get('User')}</span></span>}
                            >
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={<span><Icon type="team" /><span>{I18n.get('Team')}</span></span>}
                            >
                                <Menu.Item key="6">1</Menu.Item>
                                <Menu.Item key="8">2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9">
                                <Icon type="file" />
                                <span>{I18n.get('Upload a Resume')}</span>
                            </Menu.Item>
                        </Menu>) : null
>>>>>>> 151b20d8df9640b06ec984a23dd5371aeb71888f
                    }
                </Sider>
                <Content>
                    <Information user={this.state.user} jobs={this.state.theJobs} />
                </Content>
            </Layout>

        );
    }
}

export default Profile;