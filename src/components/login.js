import React from "react"
import { navigate } from "gatsby"
import { fakehandleLogin, isLoggedIn, setUser } from "../services/auth"
import { Auth } from "aws-amplify"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
    error: ``
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    fakehandleLogin(this.state)
  }

  handleLogin = async() => {
    const { username, password } = this.state;
    try {
      await Auth.signIn(username, password)
      const user = await Auth.currentAuthenticatedUser()
      const userInfo = {
        ...user.attribtues,
        username: user.username
      }
      setUser(userInfo)
      navigate("/app/user-profile")
    } catch (err) {
      this.setState({ error: err })
      console.log('error....: ', err)
    }
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/user-profile`)
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
            Username
            <input type="text" name="username" onChange={this.handleUpdate} />
          </label>
          <label>
            Password
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

export default Login