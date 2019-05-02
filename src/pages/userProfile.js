import React from 'react';
import Person from '../components/user_profile/sidebar';
import Information from '../components/user_profile/content';
import Amplify, { API, graphqlOperation, I18n } from "aws-amplify";
import * as queries from '../graphql/queries';
import * as customQueries from '../customGraphql/queries';
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

        try {
            const userAppliedJobs = await API.graphql(graphqlOperation(customQueries.getAppliedJobEmployee, { id: this.state.userID }));
            console.log(userAppliedJobs.data.getEmployee.appliedJob.items);

            let arr = userAppliedJobs.data.getEmployee.appliedJob.items;

            for (let i = 0; i < arr.length; ++i) {
                arr[i].jobTitle = arr[i].Job.jobTitle;
            }
            console.log("Array to put in table: ", arr);

            this.setState({ theJobs: arr });
        } catch (err) {
            console.log("From userProfile.js - error in getting the user's applied jobs: ", err);
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
                    {(getUser().sub === this.state.userID) ? (
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
                        </Menu>) : null
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