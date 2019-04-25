import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/authentication/privateRoute"
import Login from "../components/authentication/login"
import businessProfile from "./businessProfile"
import PostJob from "../components/form/postJob";
import Home from '../components/Home/home';
import Profile from "./userProfile";
import JobList from './jobList';
import JobDescription from './jobDescription';
import Application from '../components/form/application';
import SignUp from '../components/authentication/signup';
import TalentList from '../pages/talentsList';
import "antd/dist/antd.css";

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/business-profile" component={businessProfile} />
      <PrivateRoute path="/app/user-profile/:userID"     component={Profile} /> 
      <PrivateRoute path="/app/application"      component={Application} />
      <PostJob      path="/app/postJob" />
      <Login        path="/app/login" />
      <SignUp       path="/app/signup" />
      <JobList      path="/app/job-list" />
      <TalentList      path="/app/talent-list" />
      <Home         path="/" />
      <JobDescription path="/app/job-detail/:jobID"/>
    </Router>
  </Layout>
);

export default App;
