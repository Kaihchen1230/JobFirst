import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"
import { Auth } from "aws-amplify";

export default () => {
  const content = { message: "", login: true }
  if (isLoggedIn()) {
    content.message = `Hello, ${getUser().username}`
  } else {
    content.message = "You are not logged in"
  }
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0",
      }}
    >
      <span>{content.message}</span> 
      <nav>
        <Link to="/">Home</Link>
        {` `}
        <Link to="/app/user-profile">Profile</Link> 
        {` `}
        <Link to="/app/business-profile">businessProfile</Link> 
        {` `}
        <Link to="/app/job-list">Job List</Link>
        {` `}
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              Auth.signOut()
              .then(logout(() => navigate(`/app/login`)))
              .catch(err => console.log('error: ', err ))
            }}
          >
            Logout
          </a>
        ) : null}
      </nav>
    </div>
  )
}
