import React from 'react';
import { I18n } from "aws-amplify";
import { Icon, Card, Layout } from 'antd';
import officeImage from "../../static/office.jpg";
import "../style/contact.css";
import { Column, Row } from 'simple-flexbox';

const { Footer } = Layout;

/**
 * The class Contact will display the website's contact page, where
 * anyone can learn how to contact the site managers for support
 */
class Contact extends React.Component {

    render() {
        return (
            <Layout>
                <div align="center" className="mainDiv" style={{ backgroundImage: `url('https://images.pexels.com/photos/990818/pexels-photo-990818.jpeg?cs=srgb&dl=agenda-analysis-business-plan-990818.jpg&fm=jpg')`, backgroundSize: "cover" }}>
                    <br />
                    <h1 className="title" style={{ color: "white", fontSize: "3em" }} align="center">{I18n.get('Contact Us')}</h1>
                    <br />
                    {/* <p className="description" style={{color:"white", fontWeight:"normal"}} align="center">{I18n.get('You can get in touch with us at any time for 24/7 support and troubleshooting.')}</p> */}

                    <br />
                    <Column flexGrow={1}>
                        <Row vertical='center'>
                            <Column flexGrow={1} horizontal='center'>
                                <Card
                                    size="default"
                                    title={<Icon type="phone" style={{ fontSize: 25 }} />}
                                    style={{ border: "2px solid black", height: 210, backgroundColor: "#fcfcfc", borderRadius: 15 }}
                                >
                                    <br />
                                    <p className="description">+1800JOBFIRST</p>
                                </Card>
                            </Column>
                            <Column flexGrow={1} horizontal='center'>
                                <Card
                                    size="default"
                                    title={<Icon type="home" style={{ fontSize: 25 }} />}
                                    style={{ border: "2px solid black", height: 210, width: 250, backgroundColor: "#fcfcfc", borderRadius: 20 }}
                                >
                                    <p className="description">160 Convent Av,<br /> {I18n.get('New York, NY')}<br /> 10031</p>
                                </Card>
                            </Column>
                        </Row>
                    </Column>
                </div>
                <Footer style={{ textAlign: 'center' }}>
                        JobFirst ©2019 Created by JobFirst Group
                </Footer>
            </Layout>
        );
    }
}

export default Contact;