import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
//import Welcome from "../components/welcome"
import Login from "../components/login"
import postJob from "../components/postJob";
import businessProfile from "../components/businessProfile"
import Main from '../components/Main'
import Profile from "./profile";
import JobList from '../components/jobList';
import JobDescription from '../components/jobDescription';
import Application from '../components/application';
import "antd/dist/antd.css";

const App = () => (
  <Layout>
    <Router>
      {/*<PrivateRoute path="/app/welcome" component={Welcome} /> */}
      <PrivateRoute path="/app/businessProfile" component={businessProfile} />
      <Login path="/app/login" />
      <JobList path="/app/job-list" component={JobList}/>
      <Main path="/app/main" component={Main}/>
      <JobDescription path="/app/job-detail"></JobDescription>
      <PrivateRoute path="/app/postJob" component={postJob} />
      <PrivateRoute path="/app/profile" component={Profile} />
      <PrivateRoute path="/app/application" component={Application} />
    </Router>
  </Layout>
)

export default App