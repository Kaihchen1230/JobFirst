import React from 'react';
import { I18n } from "aws-amplify";
import { Layout, Skeleton, Menu, Icon, Card } from 'antd';
import officeImage from "../../static/office.jpg";
import "../style/contact.css";

class Contact extends React.Component {

    render() {
        return (

            <div align="center" className="mainDiv" style={{ backgroundImage: `url(${officeImage})` }}>
                <br />
                <br />
                <h1 className="title" align="center">Contact Us</h1>
                <br />
                <p className="description" align="center">You can get in touch with us at any time for 24/7 support and troubleshooting.</p>
                <div className='rows'>
                    <div className='row'>
                        <Card size="small" style={{ width: 300, height: 250 }}>
                            <p>+1800JOBFIRST</p>
                        </Card>
                    </div>
                    {"   "}
                    <div className='row'>
                        <Card size="small" style={{ width: 300, height: 250 }}>
                            <p>HeadQuarters: New York City</p>
                        </Card>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        );
    }

}

export default Contact;