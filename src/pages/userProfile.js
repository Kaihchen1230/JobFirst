import React from 'react';
import Person from '../components/user_profile/sidebar';
import Information from '../components/user_profile/content';
import Amplify, { API, graphqlOperation, I18n } from "aws-amplify";
import * as queries from '../graphql/queries';
import * as customQueries from '../customGraphql/queries';
import * as mutations from '../graphql/mutations';
import { getUser, isLoggedIn } from '../services/auth';
import dict from "../components/dictionary/dictionary"
import { Layout, Skeleton, Menu, Icon } from 'antd';
import UploadPage from '../components/user_profile/photoUploader';

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lan: window.localStorage.getItem('lan'),
            userID: this.props.userID,
            loading: true,
            collapsed: false,
            education: []
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
            })
        } catch (err) {
            console.log("From userProfile.js - error in getting the user's information", err);
        }
        // fetch the employee's applied jobs
        try {
            const testing = await API.graphql(graphqlOperation(customQueries.getAppliedJobEmployee, { id: this.state.userID }));
            const temp = testing.data.getEmployee.appliedJob.items;
            console.log(temp)
            const transformJob = temp.map(item => {
                const jobID = item.Job.id
                const { datePosted, deadline, jobTitle } = item.Job
                const job = {
                    jobID: jobID,
                    jobTitle: jobTitle,
                    datePosted: datePosted,
                    deadline: deadline,
                    status: item.status,
                    dateApplied: item.dateApplied
                }
                return job;
            })
            this.setState({
                jobs: transformJob
            })
            console.log(this.state.jobs);
        } catch (err) {
            console.log("custom queries failed", err);
        }
        this.setState({
            loading: false
        })

        // fetch the employee's education
        try {
            const educationResults = await API.graphql(graphqlOperation(customQueries.getEducationEmployee, { id: this.state.userID }));
            console.log("Education Results: ", educationResults);
            const temp = educationResults.data.getEmployee.education.items;
            this.setState({ education: temp });
        } catch (err) {
            console.log("couldn't get education: ", err);
        }

    }

    render() {
        if (this.state.loading) {
            return (
                <Skeleton active />
            );
        }
        I18n.putVocabularies(dict);
        I18n.setLanguage(this.state.lan);
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
                                    <UploadPage />
                                
                                {/* <span>{I18n.get('Change Profile Picture')}</span> */}
                            </Menu.Item>

                            <Menu.Item key="9">
                                <Icon type="file" />
                                <span>{I18n.get('Upload a Resume')}</span>
                            </Menu.Item>
                        </Menu>) : null
                    }
                </Sider>
                <Content>
                    <Information
                        user={this.state.user}
                        jobs={this.state.jobs}
                        education={this.state.education}
                    />
                </Content>
            </Layout>

        );
    }
}

export default Profile;