import React from "react"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"
import Layout from "../components/layout"
import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

export default () => (
  <Layout>
    <h1> {isLoggedIn() ? "Hello " + getUser().username : "Please Login"}!</h1>
    <p>
      {isLoggedIn() ? (
        <>
          You are logged in, so check your{" "}
          <Link to="/app/user-profile">profile</Link>
        </>
      ) : (
        <>
          You should <Link to="/app/login">log in</Link> to see restricted
          content. If you don't have an account with us, please <Link to="/app/signup">Sign Up</Link>
        </>
      )}
    </p>
    <p><Link to="/app/postJob">Click here</Link> to post a new job.</p>
  </Layout>
)