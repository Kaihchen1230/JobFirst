import React from 'react';

let errorStyle={
    color:"red",
    fontSize:"1.5em"
}

const Error = props => (
    <div style={errorStyle}>
        {props.errorMessage}
    </div>
);

export default Error;