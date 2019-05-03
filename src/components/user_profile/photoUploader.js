import {
    Button, Modal, Form, Input, Radio, Upload, Icon
} from 'antd';
import React from 'react';
// import Photo from "./photo.js";
import './photo.css';


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
            console.log(fileList);
            const uploadButton = (
                <div>
                    <Icon type="plus" />
                    <div className="ant-upload-text">Upload</div>
                </div>
            );
            return (
                <Modal
                    visible={visible}
                    title="Upload A New Profile Picture"
                    okText="Upload"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <Form.Item label="Photo">
                            {getFieldDecorator('file', {
                                initialValue: asd,
                                rules: [{ required: true, message: 'Please upload a photo!' }],

                            })(
                                <div className="clearfix">
                                    <Upload
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        listType="picture-card"
                                        fileList={formFileList}
                                        onPreview={onFormPreview}
                                        onChange={onFormChange}
                                    >
                                        {formFileList.length >= 1 ? null : uploadButton}
                                    </Upload>
                                    <Modal visible={formPreviewVisible} footer={null} onCancel={onFormCancel}>
                                        <img alt="example" style={{ width: '100%' }} src={formPreviewImage} />
                                    </Modal>
                                </div>
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