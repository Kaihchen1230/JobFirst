import React, { Component } from 'react';
import '../style/components/login.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

export default class Login extends Component {
  state = { 
    showLoginCard: true,
    showUserSignUpCard: false,
    showBusinessSignUpCard: false
   };

  componentDidMount() {
//    fetch('/api/getUsername')
//      .then(res => res.json())
//      .then(user => this.setState({ username: user.username }));
  }

  loginCardHandler = () => {
    this.setState({ showLoginCard: true });
    this.setState({ showUserSignUpCard: false });
    this.setState({ showBusinessSignUpCard: false });
  }

  userSignUpCardHandler = () => {
    this.setState({ showLoginCard: false });
    this.setState({ showUserSignUpCard: true });
    this.setState({ showBusinessSignUpCard: false });
  }

  businessSignUpCardHandler = () => {
    this.setState({ showLoginCard: false });
    this.setState({ showUserSignUpCard: false });
    this.setState({ showBusinessSignUpCard: true });
  }

  loginCard() {
    return (
      <div>
        <Card className="*">
          <CardContent>
            <h1>Already a User? Log in Below</h1>
            <form className="*" noValidate autoComplete="off">
              <TextField
                id="standard-name"
                label="Username"
                className="*"
                placeholder="Enter Email"
                onChange="*"
                margin="normal"
              />
              <br />
              <TextField
                id="standard-password-input"
                label="Password"
                className="*"
                placeholder="Enter Password"
                onChange="*"
                type="password"
                margin="normal"
              />
              <br />
              <br />
              <Button variant="contained" color="primary">Submit</Button>
            </form>
          </CardContent>
        </Card>
        <br />
        <Button variant="contained" color="primary" onClick={this.userSignUpCardHandler}>Create a New User Account</Button>
        <br />
        <Button variant="contained" color="primary" onClick={this.businessSignUpCardHandler}>Create a New Business Account</Button>
      </div>
    );
  }

  userSignUpCard() {
    return (
      <div>
        <Card className="*">
            <CardContent>
              <h1>Sign Up As a New User</h1>
              <form className="*" noValidate autoComplete="off">
                <TextField
                  id="standard-name"
                  label="Username"
                  className="*"
                  placeholder="Enter Email"
                  onChange="*"
                  margin="normal"
                />
                <br />
                <TextField
                  id="standard-password-input"
                  label="Password"
                  className="*"
                  placeholder="Enter Password"
                  onChange="*"
                  type="password"
                  margin="normal"
                />
                <br />
                <br />
                <Button variant="contained" color="primary">Submit</Button>
              </form>
            </CardContent>
          </Card>
          <br />
          <Button variant="contained" color="primary" onClick={this.loginCardHandler}>Log In to My Account</Button>
          <br />
          <Button variant="contained" color="primary" onClick={this.businessSignUpCardHandler}>Create a New Business Account</Button>
      </div>
    );
  }

  businessSignUpCard() {
    return (
      <div>
        <Card className="*">
            <CardContent>
              <h1>Sign Up As a New Business</h1>
              <form className="*" noValidate autoComplete="off">
                <TextField
                  id="standard-name"
                  label="Username"
                  className="*"
                  placeholder="Enter Email"
                  onChange="*"
                  margin="normal"
                />
                <br />
                <TextField
                  id="standard-password-input"
                  label="Password"
                  className="*"
                  placeholder="Enter Password"
                  onChange="*"
                  type="password"
                  margin="normal"
                />
                <br />
                <br />
                <Button variant="contained" color="primary">Submit</Button>
              </form>
            </CardContent>
          </Card>
          <br />
          <Button variant="contained" color="primary" onClick={this.loginCardHandler}>Log In to My Account</Button>
          <br />
          <Button variant="contained" color="primary" onClick={this.userSignUpCardHandler}>Create a New User Account</Button>
      </div>
    );
  }

  render() {
    if (this.state.showLoginCard) {
      return (
        <div className="Login">
          <header className="Login-header">
          {this.loginCard()}
          </header>
        </div>
      );
    }
    else if (this.state.showUserSignUpCard) {
      return (
        <div className="Login">
          <header className="Login-header">
            {this.userSignUpCard()}
          </header>
        </div>
      );
    }
    else if (this.state.showBusinessSignUpCard) {
      return (
        <div className="Login">
          <header className="Login-header">
            {this.businessSignUpCard()}
          </header>
        </div>
      );
    }
  }
}
