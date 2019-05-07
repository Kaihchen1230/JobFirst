import React from "react";
import { Form, Icon, Input, Button, Tooltip, DatePicker, Select } from 'antd';
import { Auth, I18n } from 'aws-amplify';
import dict from "../dictionary/dictionary";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';

class AddExpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //lan: window.localStorage.getItem('lan'),
            type: ""
        };
        //this.typeUpdate = this.typeUpdate.bind(this);
    }

    handleSubmit = async () => {

    }

    render() {
        return (
            <div align="center">
                <br />
                <h1>{I18n.get('Add an Experience')}</h1>
                <Form onSubmit={this.handleSubmit} style={{ "width": "50%" }} name="experiencePost">
                    <Form.Item>
                        <Input placeholder={I18n.get('Enter the Company Name')}
                            name="companyName"
                            suffix={
                                <Tooltip title={I18n.get('Enter the name of the company')}>
                                    <Icon type="info-circle" />
                                </Tooltip>}
                        />
                        <Input placeholder={I18n.get('Enter the City of the Company')}
                            name="companyCity"
                            suffix={
                                <Tooltip title={I18n.get('Enter the city of the company')}>
                                    <Icon type="info-circle" />
                                </Tooltip>}
                        />
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default AddExpForm;