import React from 'react';
import {
    Upload, message, Button, Icon,
} from 'antd';
import { Storag, I18n } from 'aws-amplify';

const ResumeUploader = (props) => {


    return (
        <Upload {...props}>
            <Button ghost>
                <Icon type="upload" /> {I18n.get('Upload A Resume')}
            </Button>
        </Upload>
    );
}
export default ResumeUploader;