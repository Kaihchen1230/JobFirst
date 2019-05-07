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

    render() {
        return (
            <div align="center">
                <br />
                <Form style={{ "width": "50%" }} name="experiencePost">
                    
                </Form>
            </div>
        )
    }
}

export default AddExpForm;