import React from 'react';
import { navigate } from 'gatsby';
import { Auth } from 'aws-amplify';
import Error from './Error'
import { isLoggedIn } from '../../services/auth';

class Signup extends React.Component {
    state = {
        name: '',
        password: '',
        email: '',
        phone_number: '',
        authCode: '',
        stage: 0,
        error: '',
        isEmployer: '',
        isProfile: 'no'
    }

    handleUpdate = event => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    signUp = async () => {
        const { name, password, email, phone_number, isEmployer, isProfile } = this.state;
        const username = email;
        try {
            await Auth.signUp({ username, password, attributes: { email, phone_number, name, 'custom:isEmployer':isEmployer, 'custom:isProfile':isProfile } })
            this.setState({ stage: 1 })
        } catch (err) {
            this.setState({ error: err })
            console.log('error signing up...', err)
        }
    }

    confirmSignUp = async () => {
        const { email, authCode } = this.state
        try {
            await Auth.confirmSignUp(email, authCode)
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
                            <div>
                                <input
                                    onChange={this.handleUpdate}
                                    placeholder='Name'
                                    name='name'
                                    value={this.state.username}
                                />
                            </div>
                            <div>
                                <input
                                    onChange={this.handleUpdate}
                                    placeholder='Password'
                                    name='password'
                                    value={this.state.password}
                                    type='password'
                                />
                            </div>
                            <div>
                                <input
                                    onChange={this.handleUpdate}
                                    placeholder='Email'
                                    name='email'
                                    value={this.state.email}
                                />
                            </div>
                            <div>
                                <input
                                    onChange={this.handleUpdate}
                                    placeholder='Phone Number'
                                    name='phone_number'
                                    value={this.state.phone_number}
                                />
                            </div>
                            <div>
                                <select name='isEmployer' onChange={this.handleUpdate}>
                                    <option value="no">Employee</option>
                                    <option value="yes">Employer</option>
                                </select>
                            </div>
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