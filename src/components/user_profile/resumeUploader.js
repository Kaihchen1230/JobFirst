import React from 'react';
import {
    Upload, message, Button, Icon,
} from 'antd';
import { Storag, I18n } from 'aws-amplify';
import "../../style/userProfile.css";


const ResumeUploader = (props) => {


    return (
        <Upload {...props}>
            <Button className='modify-info-button' ghost>
            <Icon type="file-add" theme="twoTone" twoToneColor="#52c41a"/> {I18n.get('Upload A Resume')}
            </Button>
        </Upload>
    );
}
export default ResumeUploader;