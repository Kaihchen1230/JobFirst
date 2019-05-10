import React from "react";
import { Form, Icon, Input, Button, Tooltip, message, Modal } from 'antd';
import { Auth, I18n } from 'aws-amplify';
import dict from "../dictionary/dictionary";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';
import { getLanguage } from "../../services/auth";

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    class extends React.Component {
        render() {
            const {
                visible, onCreate, onCancel, form
            } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    title={I18n.get("Add Your Address")}
                    okText={I18n.get("Add")}
                    cancelText={I18n.get("Cancel")}
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <Form.Item label={I18n.get("Line 1")}>
                            {getFieldDecorator('line1')(
                                <Input placeholder={I18n.get('Enter the first line of the street address')}
                                    name="line1"
                                    suffix={
                                        <Tooltip title={I18n.get('Enter the first line of the street address')}>
                                            <Icon type="info-circle" />
                                        </Tooltip>}
                                />
                            )}
                        </Form.Item>
                        <Form.Item label={I18n.get("Line 2")}>
                            {getFieldDecorator('line2')(
                                <Input placeholder={I18n.get('Enter the second line of the street address')}
                                    name="line2"
                                    suffix={
                                        <Tooltip title={I18n.get('Enter the second line of the street address')}>
                                            <Icon type="info-circle" />
                                        </Tooltip>}
                                />
                            )}
                        </Form.Item>
                        <Form.Item label={I18n.get("City")}>
                            {getFieldDecorator('city')(
                                <Input placeholder={I18n.get('Enter the name of the city')}
                                    name="city"
                                    suffix={
                                        <Tooltip title={I18n.get('Enter the name of the city')}>
                                            <Icon type="info-circle" />
                                        </Tooltip>}
                                />
                            )}
                        </Form.Item>
                        <Form.Item label={I18n.get("Postal Code")}>
                            {getFieldDecorator('postalCode')(
                                <Input placeholder={I18n.get('Enter the postal code')}
                                    name="postalCode"
                                    suffix={
                                        <Tooltip title={I18n.get('Enter the postal code')}>
                                            <Icon type="info-circle" />
                                        </Tooltip>}
                                />
                            )}
                        </Form.Item>
                        <Form.Item label={I18n.get("State")}>
                            {getFieldDecorator('state')(
                                <Input placeholder={I18n.get('Enter the name of the state')}
                                    name="state"
                                    suffix={
                                        <Tooltip title={I18n.get('Enter the name of the state')}>
                                            <Icon type="info-circle" />
                                        </Tooltip>}
                                />
                            )}
                        </Form.Item>
                    </Form>
                </Modal>
            )
        }
    }
)

class CreateAddressForm extends React.Component {
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

    // api call to create address function
    handleCreate = async () => {
        const form = this.formRef.props.form;
        form.validateFields(async (err, values) => {
            if (err) {
                return;
            }
            let user = await Auth.currentAuthenticatedUser();
            const { attributes } = user;
            console.log("These values were entered: ", values);
            const createAddInput = {
                id: attributes.sub,
                line1: values["line1"],
                line2: values["line2"],
                city: values["city"],
                postalCode: values["postalCode"],
                state: values["state"]
            }
            try {
                const createAddress = await API.graphql(graphqlOperation(mutations.createAddress, { input: createAddInput }));
                console.log('success creating address', createAddress);
                message.success('Success in Adding Address!');
            }
            catch (err) {
                console.log("error in creating address");
                message.error('Error in Adding Address');
            }
            form.resetFields();
            this.setState({ visible: false });
        })
    }
    saveFormRef= (formRef) => {
        this.formRef = formRef;
    }

    render() {
        I18n.putVocabularies(dict);
        I18n.setLanguage(this.state.lan);
        return (
            <div>
                <Button ghost onClick={this.showModal}>{I18n.get('Add Your Address')}</Button>
                <CollectionCreateForm 
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        )
    }
}

export default CreateAddressForm;