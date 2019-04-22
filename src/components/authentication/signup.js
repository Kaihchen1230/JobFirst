import React from 'react';
import { navigate } from 'gatsby';
import { Auth, I18n } from 'aws-amplify';
import Error from './Error'
import { isLoggedIn } from '../../services/auth';
import { Radio, Form, Icon, Input, Button, Tooltip, DatePicker, Select } from 'antd';

const RadioGroup = Radio.Group;

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

    handleUpdate = event => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleRadio = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            isEmployer: e.target.value,
        });
    }

    signUp = async () => {
        const { username, password, email, name, phone_number, isEmployer, isProfile } = this.state;
        try {
            await Auth.signUp({ username, password, attributes: { email, name, phone_number, 'custom:isEmployer': isEmployer, 'custom:isProfile': isProfile } })
            this.setState({ stage: 1 })
        } catch (err) {
            this.setState({ error: err })
            console.log('error signing up...', err)
        }
    }

    confirmSignUp = async () => {
        const { username, authCode } = this.state
        try {
            await Auth.confirmSignUp(username, authCode);
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
            <div align="center">
                <br />
                <h1>Register As A New User</h1>
                {
                    this.state.stage === 0 && (
                        <div>
                            {this.state.error && <Error errorMessage={this.state.error} />}
                            <Form className="signup-form" style={{ "width": "80%" }} onSubmit={this.signUp}>
                                <Form.Item>
                                    <Input placeholder={I18n.get('Enter Username')}
                                        prefix={<Icon type="user" />}
                                        name='username'
                                        value={this.state.username}
                                        onChange={this.handleUpdate}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Input.Password placeholder={I18n.get('Enter Password')}
                                        prefix={<Icon type="lock" />}
                                        name='password'
                                        value={this.state.password}
                                        onChange={this.handleUpdate}
                                    />
                                    <Input.Password placeholder={I18n.get('Repeat Password')}
                                        prefix={<Icon type="lock" />}
                                        name='password'
                                        value={this.state.password}
                                        onChange={this.handleUpdate}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Input placeholder={I18n.get('Enter Email')}
                                        prefix={<Icon type="laptop" />}
                                        name='email'
                                        value={this.state.email}
                                        onChange={this.handleUpdate}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Input placeholder={I18n.get('Enter Name')}
                                        prefix={<Icon type="user" />}
                                        name='name'
                                        value={this.state.name}
                                        onChange={this.handleUpdate}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Input placeholder={I18n.get('Enter Phone Number')}
                                        prefix={<Icon type="phone" />}
                                        name='phone_number'
                                        value={this.state.phone_number}
                                        onChange={this.handleUpdate}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <RadioGroup onChange={this.handleRadio}>
                                        <Radio value={'yes'}>I Want to Hire</Radio>
                                        <Radio value={'no'}>I Want to Work</Radio>
                                    </RadioGroup>
                                </Form.Item>
                                <Button onClick={this.signUp} type="primary">
                                    <span id="sign-up">Register</span>
                                </Button>
                            </Form>
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