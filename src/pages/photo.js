import {
    Upload, message, Button, Icon, Modal
} from 'antd';
import React from 'react';
import { PhotoPicker, S3Image } from 'aws-amplify-react';
import Amplify from 'aws-amplify';


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
// import React from 'react';
// import { PhotoPicker, S3Image } from 'aws-amplify-react';
// import Amplify from 'aws-amplify';

// const previewStyle = {
//     width: 320,
//     height: 320,
//     objectFit: 'cover',
//     borderRadius: '50%',
// }

// class Photo extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             previewSrc: null,
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <img src={this.state.previewSrc} style={previewStyle} />
//                 {/* <PhotoPicker
//                     title="CHOOSE PHOTO"
//                     preview="hidden"
//                     onLoad={url => this.setState({ previewSrc: url })}
//                     onPick={data => console.log(data)}
//                 /> */}
//                 <S3Image picker imgKey={this.state.previewSrc} body={this.state.previewSrc} />
//             </div>
//         );
//     }
// }

// export default Photo;