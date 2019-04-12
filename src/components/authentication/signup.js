import React from 'react';
import { navigate } from 'gatsby';
import { Auth } from 'aws-amplify';
import Error from './Error'
import { isLoggedIn } from '../../services/auth';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

const { Option } = Select;

class Signup extends React.Component {
    state = {
        username: '',
        password: '',
        email: '',
        name: '',
        phone_number: '',
        isEmployer: 'no',
        isProfile: 'no',
        authCode: '',
        stage: 0,
        error: '',
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    handleUpdate = event => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    signUp = async () => {
        const { username, password, email, name, phone_number, isEmployer, isProfile } = this.state;
        try {
            await Auth.signUp({ username, password, attributes: { email, name, phone_number, 'custom:isEmployer':isEmployer, 'custom:isProfile':isProfile } })
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
                            <div>
                                <input
                                    onChange={this.handleUpdate}
                                    placeholder='Username'
                                    name='username'
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
                                    placeholder='Name'
                                    name='name'
                                    value={this.state.name}
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
                                <input
                                    type='radio'
                                    id='no'
                                    name='isEmployer'
                                    value={this.state.isEmployer}
                                    onChange={this.handleUpdate}
                                    checked
                                />
                                <label> Employee </label>
                                <input
                                    type='radio'
                                    id='yes'
                                    name='isEmployer'
                                    value={this.state.isEmployer}
                                    onChange={this.handleUpdate}
                                />
                                <label> Employer </label>
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