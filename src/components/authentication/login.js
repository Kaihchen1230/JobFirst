import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn, setUser, getUser } from "../../services/auth"
import { I18n } from 'aws-amplify';
import { Auth } from "aws-amplify"
import { withAuthenticator } from 'aws-amplify-react'

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
    error: ``,
    language:'es'
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.handleLogin()
  }

  handleLogin = async() => {
    const { username, password } = this.state;
    try {
      await Auth.signIn(username, password)
      const user = await Auth.currentAuthenticatedUser();
      //console.log("user data is", user);
      const userInfo = {
        ...user.attributes,
        username: user.username,
      }
      // const test = await Auth.userAttributes(user);
      //console.log(test)
      setUser(userInfo)
      (userInfo['custom:isEmployer'] === 'no') ? navigate("/app/user-profile/" + userInfo.username) : navigate("/app/business-profile")
    } catch (err) {
      this.setState({ error: err })
      console.log('error....: ', err)
    }
  }

  render() {
    //set up the language
    I18n.setLanguage(localStorage.getItem('lan'));

    if (isLoggedIn()) {
      const userInfo = getUser();
      // TODO if user has no profile, ask them to fill up basic info after sign in
      //(userInfo['custom:isProfile']) === 'no') ? 
      (userInfo['custom:isEmployer'] === 'no') ? navigate("/app/user-profile/"  + userInfo.username) : navigate("/app/business-profile")
    }
    return (
      <>
        <h1>Log in</h1>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
          }}
        >
          <label>
          {I18n.get('username')}
            <input type="text" name="username" onChange={this.handleUpdate} />
          </label>
          <label>
          {I18n.get('password')}
            <input
              type="password"
              name="password"
              onChange={this.handleUpdate}
            />
          </label>
          <input type="submit" value="Log In" />
        </form>
      </>
    )
  }
}

export default Login;
