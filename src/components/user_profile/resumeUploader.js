import React from 'react';
import {
    Upload, message, Button, Icon,
} from 'antd';
import { Storage } from 'aws-amplify';

const ResumeUploader = (props) => {


    return (
        <Upload {...props}>
            <Button ghost>
                <Icon type="upload" /> Click to Upload
            </Button>
        </Upload>
    );
}
export default ResumeUploader;