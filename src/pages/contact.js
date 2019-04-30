import React from 'react';
import { I18n } from "aws-amplify";
import { Layout, Skeleton, Menu, Icon, Card } from 'antd';
import officeImage from "../../static/office.jpg";
import "../style/contact.css";

class Contact extends React.Component {

    render() {
        return (

            <div style={{ backgroundImage: `url(${officeImage})` }}>
                <br />
                <h1 className="title" align="center">Contact Us</h1>
                <br />
                <p className="description" align="center">You can get in touch with us at any time for 24/7 support and troubleshooting.</p>
                <Card size="small" style={{ width: 300 }}></Card>
                <p>+1800JOBFIRST</p>
                <br />
                <p>HeadQuarters: New York City</p>
                <br />
            </div>
        );
    }

}

export default Contact;