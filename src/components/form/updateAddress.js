import React from "react";
import { Form, Icon, Input, Button, Tooltip, message, Modal } from 'antd';
import { Auth, I18n } from 'aws-amplify';
import dict from "../dictionary/dictionary";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';
import { getLanguage } from "../../services/auth";

const CollectionCreateForm = Form.create({name: 'form_in_modal'}) (
    class extends React.Component {
        render() {
            const {
                visible, onUpdate, onCancel, form
            } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal 
                    visible = {visible}
                    title = "Update Address"
                    okText = "Update"
                    onCancel = {onCancel}
                    onOk = {onUpdate}
                />
            )
        }
    }
)


class UpdateAddressForm extends React.Component {
    state = {
        visible: false,
        lan: getLanguage()
    }

    showModal = () => {
        this.setState({ visible: true })
    }

    handleCancel = () => {
        this.setState({ visible: false })
    }

    // api call to update address function

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }

    render() {
        I18n.putVocabularies(dict);
        I18n.setLanguage(this.state.lan);
        return (
            <div>
                <Button ghost onClick={this.showModal}>{I18n.get('Update Address')}</Button>
                <CollectionCreateForm 
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onUpdate={this.handleUpdate}
                />
            </div>
        )
    }
}

export default UpdateAddressForm;