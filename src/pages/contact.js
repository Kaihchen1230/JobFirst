import React from 'react';
import { I18n } from "aws-amplify";
import { Layout, Skeleton, Menu, Icon } from 'antd';
import officeImage from "../../static/office.jpg";

class Contact extends React.Component {

    render() {
        return (

            <div style={{ backgroundImage: `url(${officeImage})`, height: "100%" }}>
                <div>
                    <br />
                    <h1 align="center">Contact Us</h1>
                    <br />
                    <p>+1800JOBFIRST</p>
                    <br />
                    <p>HeadQuarters: New York City</p>
                    <br />
                </div>
            </div>
        );
    }

}

export default Contact;