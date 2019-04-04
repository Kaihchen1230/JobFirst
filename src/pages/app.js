import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import Login from "../components/login"
import postJob from "../components/postJob";
import businessProfile from "../components/businessProfile"
import JobList from '../components/jobList';
import "antd/dist/antd.css";

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <PrivateRoute path="/app/businessProfile" component={businessProfile} />
      <Login path="/app/login" />
      <JobList path="/app/job-list"/>
      <PrivateRoute path="/app/postJob" component={postJob} />
    </Router>
  </Layout>
)

export default App