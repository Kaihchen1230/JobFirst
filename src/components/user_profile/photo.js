import { Upload, Icon, Modal } from 'antd';
import React from 'react';
import './photo.css';

const Photo = (props) => {
    const {
        previewVisible,
        previewImage,
        fileList,
        handleCancel,
        handlePreview,
        handleChange,
    } = props;

    console.log(fileList);
    const uploadButton = (
        <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
        </div>
    );
    return (
        <div className="clearfix">
            <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
            >
                {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </div>
    );

}

export default Photo;