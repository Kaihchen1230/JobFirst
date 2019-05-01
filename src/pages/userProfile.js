import React from 'react';
import MyCard from '../components/user_profile/card';
import MyList from '../components/user_profile/resumeList';
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
            // console.log(user);
            this.setState({
                user: user.data.getEmployee,
                loading: false
            })
        } catch (err) {
            console.log("From userProfile.js - error in getting the user's information", err);
        }

        // What to pass in when creating applied job objects. The id parameter must be different each time
        const appliedJobInput = {
            id: "54160v2d-6469-411e-9b53-012ed15c08d0",
            dateApplied: "some days ago",
            status: "just received",
            appliedJobEmployeeId: "57564b0d-2069-451e-9b13-075ed12c08g0",
            appliedJobJobId: "51563b0d-4069-411e-9n33-049ed15c01f0"
        }

        // Attempt to add one applied job for testing
        try {
            const newAppliedJob = await API.graphql(graphqlOperation(mutations.createAppliedJob, {input: appliedJobInput}));
            console.log("From userProfile.js - The test job was added");
        } catch(err) {
            console.log("From userProfile.js - Error: ", err);
        }

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
            //this.setState({ theJobs: [...fetchAllAppliedJobs.data.getAppliedJob] });
        } catch (err) {
            console.log("From userProfile.js - Error: ", err);
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
                    {(getUser().sub === this.state.userID) ?(
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
                    </Menu>): null
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