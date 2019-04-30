import React from 'react';
import { I18n } from "aws-amplify";
import { Layout, Skeleton, Menu, Icon, Card } from 'antd';
import officeImage from "../../static/office.jpg";
import "../style/contact.css";
import { Column, Row } from 'simple-flexbox';

class Contact extends React.Component {

    render() {
        return (

            <div align="center" className="mainDiv" style={{ backgroundImage: `url(${officeImage})` }}>
                <br />
                <h1 className="title" align="center">Contact Us</h1>
                <br />
                <p className="description" align="center">You can get in touch with us at any time for 24/7 support and troubleshooting.</p>
                <Column flexGrow={1}>
                    <Row horizontal='center'>
                        <h1>HEADER</h1>
                    </Row>
                    <Row vertical='center'>
                        <Column flexGrow={1} horizontal='center'>
                            <Card
                                size="default"
                                title="Default size card"
                            >
                                <p>+1800JOBFIRST</p>
                            </Card>
                        </Column>
                        <Column flexGrow={1} horizontal='center'>
                            <Card
                                size="default"
                                title="Default size card"
                            >
                                <p>HeadQuarters: New York City</p>
                            </Card>
                        </Column>
                    </Row>
                </Column>

            </div>
        );
    }

}

export default Contact;