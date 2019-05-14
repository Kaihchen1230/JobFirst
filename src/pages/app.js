import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/authentication/privateRoute"
import Login from "../components/authentication/login"
import businessProfile from "./businessProfile"
import PostJob from "../components/form/newPostJob";
import Home from '../components/Home/home';
import Profile from "./userProfile";
import JobList from './jobList';
import Contact from "./contact";
import JobDescription from './jobDescription';
import Application from '../components/form/application';
import SignUp from '../components/authentication/signup';
import TalentList from '../pages/talentsList';
import Photo from './photo.js';
import "antd/dist/antd.css";
import "../style/app.css"


const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/business-profile/:userID" component={businessProfile} />
      <PrivateRoute path="/app/user-profile/:userID"     component={Profile} /> 
      <PrivateRoute path="/app/application"      component={Application} />
      <PrivateRoute path="/app/photo" component={Photo} />
      <PostJob      path="/app/postJob" />
      <Login        path="/app/login" />
      <SignUp       path="/app/signup" />
      <PrivateRoute      path="/app/job-list"  component={JobList}/>
      <TalentList      path="/app/talent-list" />
      <Home         path="/" />
      <PrivateRoute path="/app/job-detail/:jobID"  component={JobDescription}/>
      <Contact        path="/app/contact" />
    </Router>
  </Layout>
);

export default App;
