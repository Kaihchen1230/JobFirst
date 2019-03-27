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

  render() {
    return (
      <div>
        <Card className="*">
          <CardContent>
            <h1>Sign Up As a New User</h1>
            <form className="*"></form>
          </CardContent>
        </Card>
        
        
      </div>
    );
  }
}
