import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/authentication/privateRoute"
import Login from "../components/authentication/login"
import businessProfile from "./businessProfile"
import postJob from "./postJob";
import Main from '../components/Main'
import Profile from "./profile";
import JobList from '../components/jobList';
import JobDescription from './jobDescription';
import Application from '../components/form/application';
import SignUp from '../components/authentication/signup';
import "antd/dist/antd.css";

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/business-profile" component={businessProfile} />
      <PrivateRoute path="/app/postJob"          component={postJob} />
      <PrivateRoute path="/app/user-profile"     component={Profile} />
      <PrivateRoute path="/app/application"      component={Application} />
      <Login        path="/app/login" />
      <SignUp       path="/app/signup" />
      <JobList      path="/app/job-list" />
      <Main         path="/app/main" />
      <JobDescription path="/app/job-detail" />
    </Router>
  </Layout>
);

export default App;
