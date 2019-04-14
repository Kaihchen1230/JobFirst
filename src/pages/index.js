import React from "react"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"
import Layout from "../components/layout"
import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

export default () => (
  <Layout>
    
  </Layout>
)