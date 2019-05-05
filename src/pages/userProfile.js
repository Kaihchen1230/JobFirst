import React from 'react';
import Person from '../components/user_profile/sidebar';
import Information from '../components/user_profile/content';
import Amplify, { Auth, API, graphqlOperation, I18n, Storage } from "aws-amplify";
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
            // lan: window.localStorage.getItem('lan'),
            userID: this.props.userID,
            loading: true,
            collapsed: false,
            education: [],
            experiences: [],
            allowEdit: false
        }
    }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    componentDidMount = async () => {
        let currentUser = await Auth.currentAuthenticatedUser();    // the current user
        const { attributes } = currentUser;
        if (this.state.userID === attributes.sub) {
            this.setState({ allowEdit: true });
        }
        else {
            this.setState({ allowEdit: false });
        }
        console.log("allowEdit: ", this.state.allowEdit);
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
            console.log("Applied Job Results: ", testing)
            const temp = testing.data.getEmployee.appliedJob.items;
            //console.log(temp)
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
            //console.log(this.state.jobs);
        } catch (err) {
            console.log("custom queries failed", err);
        }
        
        // fetch the employee's education
        try {
            const educationResults = await API.graphql(graphqlOperation(customQueries.getEducationEmployee, { id: this.state.userID }));
            //console.log("Education Results: ", educationResults);
            const temp = educationResults.data.getEmployee.education.items;
            this.setState({ education: temp });
        } catch (err) {
            console.log("couldn't get education: ", err);
        }

        // fetch the employee's experiences
        try {
            const experienceResults = await API.graphql(graphqlOperation(customQueries.getExperienceEmployee, { id: this.state.userID }));
            //console.log("Experience Results: ", experienceResults);
            const temp = experienceResults.data.getEmployee.experience.items;
            this.setState({ experiences: temp });
        } catch (err) {
            console.log("couldn't get experience: ", err);
        }
        
        // fetch photo
        if (this.state.user.pic === 'yes') {
            Storage.get('profilePic', {
                level: 'protected',
                identityId: this.state.user.identityID// the identityId of that user
            })
                .then(result => {
                    console.log(result);
                    let user = this.state.user;
                    user.pic = result;
                    console.log("state is", this.state);
                    this.setState({ user: user });
                })
                .catch(err => console.log(err));
        }
        this.setState({
            loading: false
        })
    }

    deleteEducation = async (key, e) => {
        // call API to delete
        let deleteId = {
            id: key
        }
        try {
            const delEdu = await API.graphql(graphqlOperation(mutations.deleteEducation, { input: deleteId }));
            console.log("this item was deleted: ", delEdu);
        } catch (err) {
            console.log("error - ", err);
        }
        let edu = [...this.state.education];
        let deleteIndex = edu.findIndex((item) => item.id === key);
        let willDelete = false;
        edu.forEach(item => {
            if (item.id === key) {
                willDelete = true;
            }
        })
        if (willDelete) {
            edu.splice(deleteIndex, 1);
            this.setState({ education: edu });
        }
    }

    deleteExperience = async (key, e) => {
        // call API to delete
        let deleteId = {
            id: key
        }
        try {
            const delExp = await API.graphql(graphqlOperation(mutations.deleteExperience, { input: deleteId }));
            console.log("this item was deleted: ", delExp);
        } catch (err) {
            console.log("error - ", err);
        }
        // remove it from the page
        let exp = [...this.state.experiences];
        let deleteIndex = exp.findIndex((item) => item.id === key);
        let willDelete = false;
        exp.forEach(item => {
            if (item.id === key) {
                willDelete = true;
            }
        })
        if (willDelete) {
            exp.splice(deleteIndex, 1);
            this.setState({ experiences: exp });
        }
    }

    render() {
        if (this.state.loading) {
            return (
                <Skeleton active />
            );
        }
        I18n.putVocabularies(dict);
        // I18n.setLanguage(this.state.lan);
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
                        experiences={this.state.experiences}
                        allowEdit={this.state.allowEdit}
                        deleteEdu={this.deleteEducation}
                        deleteExp={this.deleteExperience}
                    />
                </Content>
            </Layout>

        );
    }
}

export default Profile;