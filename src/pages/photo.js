import React from 'react';
import { PhotoPicker, S3Image } from 'aws-amplify-react';
import Amplify from 'aws-amplify';

const previewStyle = {
    width: 320,
    height: 320,
    objectFit: 'cover',
    borderRadius: '50%',
}

class Photo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            previewSrc: null,
        }
    }

    render() {
        return (
            <div>
                <img src={this.state.previewSrc} style={previewStyle} />
                {/* <PhotoPicker
                    title="CHOOSE PHOTO"
                    preview="hidden"
                    onLoad={url => this.setState({ previewSrc: url })}
                    onPick={data => console.log(data)}
                /> */}
                <S3Image picker imgKey={this.state.previewSrc} body={this.state.previewSrc} />
            </div>
        );
    }
}

export default Photo;