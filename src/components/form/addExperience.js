import React from "react";
import { Form, Icon, Input, Button, Tooltip, message, Modal } from 'antd';
import { Auth, I18n } from 'aws-amplify';
import dict from "../dictionary/dictionary";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';
import { getLanguage } from "../../services/auth";


const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
        render() {
            const {
                visible, onCancel, onCreate, form,
            } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    title={I18n.get("Add Experience or Skill")}
                    okText={I18n.get("Add")}
                    cancelText={I18n.get("Cancel")}
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <Form.Item label={I18n.get("Company Name")}>
                            {getFieldDecorator('companyName')(
                                <Input placeholder={I18n.get('Enter the Company Name')}
                                    name="companyName"
                                    suffix={
                                        <Tooltip title={I18n.get('Enter the Company Name')}>
                                            <Icon type="info-circle" />
                                        </Tooltip>}
                                />
                            )}
                        </Form.Item>

                        <Form.Item label={I18n.get("Company City")}>
                            {getFieldDecorator('companyCity')(
                                <Input placeholder={I18n.get('Enter the City of the Company')}
                                    name="companyCity"
                                    suffix={
                                        <Tooltip title={I18n.get('Enter the City of the Company')}>
                                            <Icon type="info-circle" />
                                        </Tooltip>}
                                />
                            )}
                        </Form.Item>

                        <Form.Item label={I18n.get("Company Country")}>
                            {getFieldDecorator('companyCountry')(
                                <Input placeholder={I18n.get('Enter the Country of the Company')}
                                    name="companyCountry"
                                    suffix={
                                        <Tooltip title={I18n.get('Enter the Country of the Company')}>
                                            <Icon type="info-circle" />
                                        </Tooltip>}
                                />
                            )}
                        </Form.Item>

                        <Form.Item label={I18n.get("Starting Year")}>
                            {getFieldDecorator('yearStart')(
                                <Input placeholder={I18n.get('Enter the Starting Year')}
                                    name="yearStart"
                                    suffix={
                                        <Tooltip title={I18n.get('Enter the Starting Year')}>
                                            <Icon type="info-circle" />
                                        </Tooltip>}
                                />
                            )}
                        </Form.Item>

                        <Form.Item label={I18n.get("Ending Year")}>
                            {getFieldDecorator('yearEnd')(
                                <Input placeholder={I18n.get('Enter the Ending Year')}
                                    name="yearEnd"
                                    suffix={
                                        <Tooltip title={I18n.get('Enter the Ending Year')}>
                                            <Icon type="info-circle" />
                                        </Tooltip>}
                                />
                            )}
                        </Form.Item>

                        <Form.Item label={I18n.get("Reason for Leaving")}>
                            {getFieldDecorator('leaveReason')(
                                <Input placeholder={I18n.get('Enter the Reason for Leaving')}
                                    name="leaveReason"
                                    suffix={
                                        <Tooltip title={I18n.get('Enter the Reason for Leaving')}>
                                            <Icon type="info-circle" />
                                        </Tooltip>}
                                />
                            )}
                        </Form.Item>

                    </Form>
                </Modal>
            );
        }
    }
);

class AddExpForm extends React.Component {
    state = {
        visible: false,
        lan: getLanguage()

    };

    showModal = () => {
        console.log("clicked")
        this.setState({ visible: true });
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    handleCreate = async () => {
        const form = this.formRef.props.form;
        form.validateFields(async (err, values) => {
            if (err) {
                return;
            }
            let user = await Auth.currentAuthenticatedUser();
            const { attributes } = user;
            console.log('Received values of form: ', values);
            const createExperienceInput = {
                startYear: values["yearStart"],
                endYear: values["yearEnd"],
                companyName: values["companyName"],
                reasonToLeave: values["leaveReason"],
                city: values["companyCity"],
                country: values["companyCountry"],
                experienceWhoseId: attributes.sub
            }
            try {
                const newExperience = await API.graphql(graphqlOperation(mutations.createExperience, { input: createExperienceInput }));
                console.log('success adding an experience');
                message.success(`Success adding an experience`);
            } catch (err) {
                console.log('error in adding an experience', err);
                message.error(`Error in adding an experience`);
            }
            form.resetFields();
            this.setState({ visible: false });
        });
    }

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }

    render() {
        I18n.putVocabularies(dict);
        I18n.setLanguage(this.state.lan);
        return (
            <div>
                <Button ghost onClick={this.showModal}>{I18n.get('Add Experience or Skill')}</Button>
                <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}

export default AddExpForm;