import {
    Button, Modal, Form, Input, Radio, Upload, Icon
} from 'antd';
import React from 'react';
import './photo.css';
import Amplify, { Auth, Storage, API, graphqlOperation, I18n } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import { getUser } from '../../services/auth';

const UploadForm = Form.create({ name: 'upload_photo' })(
    // eslint-disable-next-line
    class extends React.Component {
        render() {
            const {
                visible, onCancel, onCreate, form,
                onFormCancel, onFormPreview, onFormChange, onFormDummy, onFormUpload, onReset,
                formPreviewVisible, formPreviewImage, formFileList
            } = this.props;
            const { getFieldDecorator } = form;
            //console.log(formFileList);
            const uploadButton = (
                <div>
                    <Icon type="plus" />
                    <div className="ant-upload-text">Upload</div>
                </div>
            );
            return (
                <Modal
                    visible={visible}
                    title={I18n.get("Upload A New Profile Picture")}
                    okText="Done"
                    cancelText="Cancel"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    {/* <Form layout="vertical">
                        <Form.Item label="Photo">
                            {getFieldDecorator('file', {
                                initialValue: formFileList && formPreviewImage ? formPreviewImage : [],
                                valuePropName: 'fileList',
                                getValueFromEvent: onFormChange,
                                rules: [{ required: true, message: 'Please upload a photo!' }],
                            })(
                                <div className="clearfix">
                                    <Upload
                                        listType="picture-card"
                                        onPreview={onFormPreview}
                                        customRequest={onFormDummy}
                                    >
                                        {/* {formFileList.length >= 1 ? null : uploadButton} 
                                        {uploadButton}
                                    </Upload>
                                    <Modal visible={formPreviewVisible} footer={null} onCancel={onFormCancel}>
                                        <img alt="example" style={{ width: '100%' }} src={formPreviewImage} />
                                    </Modal>
                                </div>
                            )}
                        </Form.Item>
                    </Form> */}
                    <div className="clearfix">
                        <Upload
                            //action="https://www.mocky.io/v2/5cc8019d300000980a055e76" // TODO thsi is mocking action
                            customRequest={onFormUpload}
                            listType="picture-card"
                            fileList={formFileList}
                            onPreview={onFormPreview}
                            onChange={onFormChange}
                        >
                            {formFileList.length >= 1 ? null : uploadButton}
                        </Upload>
                        <Button type="primary" onClick={onReset}>Reset To Default</Button>
                        <Modal visible={formPreviewVisible} footer={null} onCancel={onFormCancel}>
                            <img alt="example" style={{ width: '100%' }} src={formPreviewImage} />
                        </Modal>
                    </div>
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
    handleDummy = (file) => {
        console.log('this is dummy', file.file);
    }

    handleUpload = (file) => {
        const pic = file.file;
        //console.log(pic);
        Storage.put("profilePic", pic, {
            level: 'protected',
            contentType: pic.type
        })
            .then((result) => {
                console.log(result)
                let tempfileList = this.state.fileList;
                tempfileList[0].status = 'done';
                this.setState({ fileList: tempfileList })
                //console.log('fileList', this.state.fileList)
                const user = getUser();
                const isEmployer = user['custom:isEmployer'];
                const uid = user.sub
                if (isEmployer === 'no') {
                    API.graphql(graphqlOperation(mutations.updateEmployee, { input: { id: uid, pic: 'yes' } }))
                        .then((result) => {
                            console.log('success to update employee', result);
                        })
                        .catch(err => console.log('error in update employee', err));
                } else {
                    API.graphql(graphqlOperation(mutations.updateEmployer, { input: { id: uid, companyPic: 'yes' } }))
                        .then((result) => {
                            console.log('success to update employer', result);
                        })
                        .catch(err => console.log('error in update employer', err));
                }
            })
            .catch(err => console.log(err));

    }

    handleFormCancel = () => this.setState({ previewVisible: false })

    handleFormPreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleFormChange = ({ fileList }) => {
        // console.log('file', file);
        // console.log(fileList);
        this.setState({ fileList })
    }
    // end for the form

    handleReset = () => {
        const user = getUser();
        const isEmployer = user['custom:isEmployer'];
        const uid = user.sub
        if (isEmployer === 'no') {
            API.graphql(graphqlOperation(mutations.updateEmployee, { input: { id: uid, pic: 'no' } }))
                .then((result) => {
                    console.log('success to update employee', result);
                })
                .catch(err => console.log('error in update employee', err));
        } else {
            API.graphql(graphqlOperation(mutations.updateEmployer, { input: { id: uid, companyPic: 'no' } }))
                .then((result) => {
                    console.log('success to update employer', result);
                })
                .catch(err => console.log('error in update employer', err));
        }
        this.setState({ visible: false });
    }

    showModal = () => {
        this.setState({ visible: true });
    }
    // TODO should make this set back to default
    handleCancel = () => {
        this.setState({ visible: false });
    }
    // this below function will pretty much useless
    // TODO need to write another upload function
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
        let buttonStyle ={
            backgroundColor:"#1890ff",
            color:"white",
            position: "absolute",
            // left:"83.8%",
            // bottom:"70%"
        }
        console.log("is business",this.props.isBusiness)
        return (
            <div>
                {this.props.isBusiness ?
                    <Button style ={buttonStyle} onClick={this.showModal}>{I18n.get('Upload A New Logo')}</Button>:
                    <Button ghost type='ghost' onClick={this.showModal}>{I18n.get('Upload A New Profile Picture')}</Button>
                }
                
                <UploadForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    onFormCancel={this.handleFormCancel}
                    onFormPreview={this.handleFormPreview}
                    onFormChange={this.handleFormChange}
                    onFormDummy={this.handleDummy}
                    onFormUpload={this.handleUpload}
                    formPreviewVisble={this.state.previewVisible}
                    formPreviewImage={this.state.previewImage}
                    formFileList={this.state.fileList}
                    onReset={this.handleReset}
                />
            </div>
        );
    }
}

export default UploadPage;