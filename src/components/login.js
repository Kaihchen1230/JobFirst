import React, { Component } from 'react';
import '../style/app.scss';

export default class Login extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div className={"header"}>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={"/public/images/react.png"} alt="react" />
      </div>
    );
  }
}
