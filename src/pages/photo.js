/* the purpose of this file is to experiment with storage upload */

import React from 'react';
import { Auth, Storage } from 'aws-amplify';

class Photo extends React.Component {
    onChange(e) {
        const file = e.target.files[0];
        console.log('file', file);
        Storage.put('example.png', file, {
            contentType: 'image/png'
        })
            .then(result => console.log(result))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <input
                type="file" accept='image/png'
                onChange={(e) => this.onChange(e)}
            />
        )
    }
}

export default Photo;