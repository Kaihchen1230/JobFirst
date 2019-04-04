import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import Login from "../components/login"
import postJob from "../components/postJob";
import businessProfile from "../components/businessProfile"
import Main from "../components/Main"
import JobList from "../components/JobList"
import "antd/dist/antd.css";

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <PrivateRoute path="/app/businessProfile" component={businessProfile} />
      <Login path="/app/login" />
      <PrivateRoute path="/app/postJob" component={postJob} />
      <PrivateRoute path="/app/main" component={Main} />
      <PrivateRoute path="/app/jobList" component={JobList} />
    </Router>
  </Layout>
)

export default App