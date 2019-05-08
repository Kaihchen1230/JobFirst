import React from 'react';
import {
    Button, Modal, Form, Input, Radio, Select, InputNumber, Icon
} from 'antd';

let id = 0;

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
        render() {
            const {
                visible, onCancel, onCreate, form, add, remove,
            } = this.props;
            const { getFieldDecorator, getFieldValue } = form;
            const formItemLayout = {
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 4 },
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 20 },
                },
            };
            const formItemLayoutWithOutLabel = {
                wrapperCol: {
                    xs: { span: 24, offset: 0 },
                    sm: { span: 20, offset: 4 },
                },
            };
            getFieldDecorator('keys', { initialValue: [] });
            const keys = getFieldValue('keys');
            const formItems = keys.map((k, index) => (
                <Form.Item
                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    label={index === 0 ? 'Languages' : ''}
                    required={false}
                    key={k}
                >
                    {getFieldDecorator(`languages[${k}]`)(
                        <Input placeholder="Language" style={{ width: '60%', marginRight: 8 }} />
                    )}
                    {keys.length > 1 ? (
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            onClick={() => remove(k)}
                        />
                    ) : null}
                </Form.Item>
            ));

            return (
                <Modal
                    visible={visible}
                    title="Modify Basic Info"
                    okText="Done"
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
                            {getFieldDecorator('age', { initialValue: 15 })(
                                <InputNumber min={15} max={100} />
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
                        {formItems}
                        <Form.Item label="Language">
                            <Button type="dashed" onClick={add} style={{ width: '60%' }}>
                                <Icon type="plus" /> Add language
                            </Button>
                        </Form.Item>

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

    remove = (k) => {
        const { form } = this.formRef.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    }

    add = () => {
        const { form } = this.formRef.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(id++);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });
    }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.form.validateFields((err, values) => {
    //         if (!err) {
    //             const { keys, names } = values;
    //             console.log('Received values of form: ', values);
    //             console.log('Merged values:', keys.map(key => names[key]));
    //         }
    //     });
    // }

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
                <Button ghost onClick={this.showModal}>Modify Basic Info</Button>
                <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    add={this.add}
                    remove={this.remove}
                />
            </div>
        );
    }
}

export default BasicInfoForm;