import React from 'react';
import {
    Button, Modal, Form, Input, Radio, Select,
} from 'antd';

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
                    title="Create a new collection"
                    okText="Create"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
                        <Form.Item label="First Name">
                            {getFieldDecorator('firstName')(
                                <Input />
                            )}
                        </Form.Item>

                        <Form.Item label="Middle Name">
                            {getFieldDecorator('middleName')(
                                <Input />
                            )}
                        </Form.Item>

                        <Form.Item label="Last Name">
                            {getFieldDecorator('lastName')(
                                <Input />
                            )}
                        </Form.Item>

                        <Form.Item label="Age">
                            {getFieldDecorator('age')(
                                <Input />
                            )}
                        </Form.Item>

                        <Form.Item label="English Level">
                            {getFieldDecorator('englishLevel')(
                                <Select
                                    placeholder="Select what best describe your english level">
                                    <Option value="0">Beginner</Option>
                                    <Option value="1">Elementary</Option>
                                    <Option value="2">Pre-intermediate</Option>
                                    <Option value="3">Intermediate</Option>
                                    <Option value="4">Upper-intermediate</Option>
                                    <Option value="5">Advanced</Option>
                                </Select>
                            )}
                        </Form.Item>

                        {/* spoken langauge */}

                        <Form.Item label="Email">
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }]
                            })(
                                <Input />
                            )}
                        </Form.Item>

                        <Form.Item label="Phone">
                            {getFieldDecorator('phone')(
                                <Input />
                            )}
                        </Form.Item>

                    </Form>
                </Modal>
            );
        }
    }
);

class BasicInfoForm extends React.Component {
    state = {
        visible: false,
    };

    showModal = () => {
        this.setState({ visible: true });
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ visible: false });
        });
    }

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>New Collection</Button>
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

export default BasicInfoForm;