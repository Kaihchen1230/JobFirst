import React from "react"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"
import Layout from "../components/layout"
import Amplify from 'aws-amplify'
import config from '../aws-exports'
import Home from '../components/Home/home';
Amplify.configure(config)

export default () => (
  <Layout>
    <Home />
  </Layout>
)