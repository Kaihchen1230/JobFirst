import React from 'react';
import MyCard from '../components/user_profile/card';
import MyList from '../components/user_profile/resumeList';
import Person from '../components/user_profile/sidebar';
import Information from '../components/user_profile/content';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import * as queries from '../graphql/queries';
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
            console.log("error in getting the user's information", err);
        }

        // fetch all relevant jobs and save to state to render to page
        try {
            // we can fetch an applied job by id now. But now we have to filter it by the employee id which returns results specific to the user
            let fetchAllAppliedJobs = await API.graphql(graphqlOperation(queries.getAppliedJob, { id: this.state.userID }));
            if (fetchAllAppliedJobs.data == null) {
                console.log("From userProfile.js - There are no jobs to be fetched.");
            }
            else {
                console.log("From userProfile.js - The following job was fetched:\n", fetchAllAppliedJobs.data.getAppliedJob);
            }
            this.setState({ theJobs: [...fetchAllAppliedJobs.data.getAppliedJob] });
        } catch (err) {
            console.log("From userProfile.js - The error is ", err);
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
                            <span>Edit Profile</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="picture" />
                            <span>Change Profile Picture</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user" /><span>User</span></span>}
                        >
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team" /><span>Team</span></span>}
                        >
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file" />
                            <span>Upload A resume</span>
                        </Menu.Item>
                    </Menu>): null
                    }
                </Sider>
                <Content>
                    <Information user={this.state.user} />
                </Content>
            </Layout>

        );
    }
}

export default Profile;