import {
    Button, Modal, Form, Input, Radio,
} from 'antd';
import React from 'react';
import Photo from "./photo.js";


const UploadForm = Form.create({ name: 'upload_photo' })(
    // eslint-disable-next-line
    class extends React.Component {
        render() {
            const {
                visible, onCancel, onCreate, form,
                onFormCancel, onFormPreview, onFormChange,
                formPreviewVisible, formPreviewImage, formFileList
            } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    title="Upload A New Profile Picture"
                    okText="Upload"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <Form.Item label="Title">
                            {getFieldDecorator('title', {
                                rules: [{ required: true, message: 'Please input the title of collection!' }],
                            })(
                                <Photo
                                    handleCancel={onFormCancel}
                                    handlePreview={onFormPreview}
                                    handleChange={onFormChange}
                                    previewVisible={formPreviewVisible}
                                    previewImage={formPreviewImage}
                                    fileList={formFileList} />
                            )}
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    }
);

class UploadPage extends React.Component {
    state = {
        visible: false,
        previewVisible: false,
        previewImage: '',
        fileList: [],
    };
    // for the form
    handleFormCancel = () => this.setState({ previewVisible: false })

    handleFormPreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleFormChange = ({ fileList }) => this.setState({ fileList })
    // end for the form

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
                <Button type="primary" onClick={this.showModal}>Upload A New Profile Picture</Button>
                <UploadForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    onFormCancel={this.handleFormCancel}
                    onFormPreview={this.handleFormPreview}
                    onFormCancel={this.handleFormCancel}
                    formPreviewVisble={this.state.previewVisible}
                    formPreviewImage={this.state.previewImage}
                    formFileList={this.state.fileList}
                />
            </div>
        );
    }
}

export default UploadPage;