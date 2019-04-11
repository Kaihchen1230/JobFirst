import React from 'react';
import { navigate } from 'gatsby';
import { Auth } from 'aws-amplify';
import Error from './Error'
import { isLoggedIn } from '../../services/auth';

class Signup extends React.Component {
    state = {
        username: '',
        password: '',
        email: '',
        phone_number: '',
        authCode: '',
        stage: 0,
        error: '',
        userType:'applicant'
    }

    handleUpdate = event => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    signUp = async () => {
        const { username, password, email, phone_number,userType } = this.state;

        try {
            await Auth.signUp({ username, password, attributes: { email, phone_number, 'custom:userType':userType } })
            this.setState({ stage: 1 })
        } catch (err) {
            this.setState({ error: err })
            console.log('error signing up...', err)
        }
    }

    confirmSignUp = async () => {
        const { username, authCode } = this.state
        try {
            await Auth.confirmSignUp(username, authCode)
            alert('Successfully signed up!')
            navigate("/app/login")
        } catch (err) {
            this.setState({ error: err })
            console.log('error confirming signing up...', err)
        }
    }

    render() {
        if (isLoggedIn()) {
            navigate(`/app/user-profile`)
        }

        return (
            <div>
                <h1>Sign up</h1>
                {
                    this.state.stage === 0 && (
                        <div>
                            {this.state.error && <Error errorMessage={this.state.error} />}
                            <input
                                onChange={this.handleUpdate}
                                placeholder='Username'
                                name='username'
                                value={this.state.username}
                            />
                            <input
                                onChange={this.handleUpdate}
                                placeholder='Password'
                                name='password'
                                value={this.state.password}
                                type='password'
                            />
                            <input
                                onChange={this.handleUpdate}
                                placeholder='Email'
                                name='email'
                                value={this.state.email}
                            />
                            <input
                                onChange={this.handleUpdate}
                                placeholder='Phone Number'
                                name='phone_number'
                                value={this.state.phone_number}
                            />
                            <select name='userType' onChange={this.handleUpdate}>
                                <option value="applicant">applicant</option>
                                <option value="employer">employer</option>
                            </select>
                            <div onClick={this.signUp}>
                                <span>Sign Up</span>
                            </div>
                        </div>
                    )
                }
                {
                    this.state.stage === 1 && (
                        <div>
                            {this.state.error && <Error errorMessage={this.state.error} />}
                            <input
                                onChange={this.handleUpdate}
                                placeholder='Authorization Code'
                                name='authCode'
                                value={this.state.authCode}
                            />
                            <div onClick={this.confirmSignUp}>
                                <span>Confirm Sign Up</span>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Signup;