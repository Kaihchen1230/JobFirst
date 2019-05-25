import React from "react";
import { Form, Icon, Input, Button, Tooltip, Modal, message } from 'antd';
import { Auth, I18n } from 'aws-amplify';
import dict from "../dictionary/dictionary";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';
import { getLanguage } from "../../services/auth";
import "../../style/userProfile.css";

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
                    title={I18n.get("Add Education or Award")}
                    okText={I18n.get("Add")}
                    cancelText={I18n.get("Cancel")}
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <Form.Item label={I18n.get("School Name")}>
                            {getFieldDecorator('schoolName')(
                                <Input placeholder={I18n.get('Enter the School Name')}
                                    name="schoolName"
                                    suffix={
                                        <Tooltip title={I18n.get('Enter the School Name')}>
                                            <Icon type="info-circle" />
                                        </Tooltip>}
                                />
                            )}
                        </Form.Item>

                        <Form.Item label={I18n.get("Degree Name")}>
                            {getFieldDecorator('degreeName')(
                                <Input placeholder={I18n.get('Enter the Name of the Degree')}
                                    name="degreeName"
                                    suffix={
                                        <Tooltip title={I18n.get('Enter the Name of the Degree')}>
                                            <Icon type="info-circle" />
                                        </Tooltip>}
                                />
                            )}
                        </Form.Item>

                        <Form.Item label={I18n.get("School City")}>
                            {getFieldDecorator('schoolCity')(
                                <Input placeholder={I18n.get('Enter the City of the School')}
                                    name="schoolCity"
                                    suffix={
                                        <Tooltip title={I18n.get('Enter the City of the School')}>
                                            <Icon type="info-circle" />
                                        </Tooltip>}
                                />
                            )}
                        </Form.Item>

                        <Form.Item label={I18n.get("School Country")}>
                            {getFieldDecorator('schoolCountry')(
                                <Input placeholder={I18n.get('Enter the Country of the School')}
                                    name="schoolCountry"
                                    suffix={
                                        <Tooltip title={I18n.get('Enter the Country of the School')}>
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

                    </Form>
                </Modal>
            );
        }
    }
);
/**
 * The class AddEduForm will render the Add Education form.
 * It will give the user the ability to add a new education to 
 * their profile.
 */
class AddEduForm extends React.Component {
    state = {
        visible: false,
        lan: getLanguage()

    };
    /**
     * hide or show the form
     */
    showModal = () => {
        console.log("clicked")
        this.setState({ visible: true });
    }
    /**
     * handle a click of the cancel button on the form
     */
    handleCancel = () => {
        this.setState({ visible: false });
    }
    /**
     * use the API to create a new education
     */
    handleCreate = async () => {
        const form = this.formRef.props.form;
        form.validateFields(async(err, values) => {
            if (err) {
                return;
            }
            let user = await Auth.currentAuthenticatedUser();
            const { attributes } = user;
            console.log('Received values of form: ', values);
            const createEducationInput = {
                startYear: values["yearStart"],
                endYear: values["yearEnd"],
                degree: values["degreeName"],
                schoolName: values["schoolName"],
                city: values["schoolCity"],
                country: values["schoolCountry"],
                educationWhoseId: attributes.sub
            }
            try {
                const newEducation = await API.graphql(graphqlOperation(mutations.createEducation, { input: createEducationInput }));
                console.log('success adding an education');
                message.success(`Success adding an education`);
            } catch (err) {
                console.log('error in adding an education', err);
                message.error(`Error in adding an education: ${err.message}`);
            }
            form.resetFields();
            this.setState({ visible: false });
            window.location.reload();
        });
    }
    /**
     * save the values entered in the form
     */
    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }
    /**
     * render the form on the sidebar
     */
    render() {
        I18n.putVocabularies(dict);
        I18n.setLanguage(this.state.lan);
        return (
            <div>
                <Button className='modify-info-button' ghost onClick={this.showModal}>
                <Icon type="trophy" theme="twoTone" twoToneColor="#52c41a"/>{I18n.get('Add Education or Award')}</Button>
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



export default AddEduForm;