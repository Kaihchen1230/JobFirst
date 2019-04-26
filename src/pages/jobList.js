import React from 'react';
import { Col, Row, Select, Input, Icon, Layout } from 'antd';
import JobItem from '../components/jobList/jobItem';
import dict from "../components/dictionary/dictionary";
import { I18n, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import { Connect } from "aws-amplify-react";
import { Button } from 'antd/lib/radio';

const {
    Header, Footer, Sider, Content,
} = Layout;
const Search = Input.Search;
const Option = Select.Option;
const InputGroup = Input.Group;
// let lan = window.localStorage.getItem('lan');
// I18n.putVocabularies(dict);
// I18n.setLanguage(lan);
class JobList extends React.Component {

    state = {
        "filter":{

        }
    }

    searchByName = (value) => {
        if(value == ""){
            this.setState({"filter":{}});
        }else{
            let newSearch = {"filter":{"jobTitle":{"contains":value}}};
            this.setState({"filter":newSearch});
        }
    }

    reset = () => {
        this.setState({"filter":{}});
    }

    render() {
        return (
                <Layout style={{ margin: "16px 24px 16px 24px" }}>
                    <Header  style={{ textAlign: "center", backgroundColor:"gray", height:"15%" }}>
                        <InputGroup compact>
                            <Select size="large" defaultValue="Name" style={{ width: "10%" }}>
                                <Option value="Name">Name</Option>
                                <Option value="Location">Location</Option>
                            </Select>
                            <Search
                                style={{ width: '50%' }}
                                placeholder={I18n.get('Search')}
                                enterButton="Search"
                                size="large"
                                onSearch={value => this.searchByName(value)}
                            />
                        </InputGroup>
                        <InputGroup compact>
                            <Row gutter={8} style={{ width: '60%' }}>
                                <Col span={4}>
                                    <Select style={{ width: "80%" }} size="large" placeholder="Category">
                                        <Option value="Option1-1">Option1-1</Option>
                                        <Option value="Option1-2">Option1-2</Option>
                                    </Select>
                                </Col>
                                <Col span={4}>
                                    <Select style={{ width: "80%" }} size="large" placeholder="Type">
                                        <Option value="Option1-1">{I18n.get('Full Time')}</Option>
                                        <Option value="Option1-2">{I18n.get('Part Time')}</Option>
                                        <Option value="Option1-3">{I18n.get('Internship')}</Option>
                                        <Option value="Option1-4">{I18n.get('Temporary')}</Option>
                                    </Select>
                                </Col>
                                <Col span={4}>
                                    <Select style={{ width: "80%" }} size="large" placeholder="Education">
                                        <Option value="Option1-1">Option1-1</Option>
                                        <Option value="Option1-2">Option1-2</Option>
                                    </Select>
                                </Col>
                                <Col span={4}>
                                    <Select style={{ width: "80%" }} size="large" placeholder="Company Scale">
                                        <Option value="Option1-1">Option1-1</Option>
                                        <Option value="Option1-2">Option1-2</Option>
                                    </Select>
                                </Col>
                                <Col span={4}>
                                    <Select style={{ width: "80%" }} size="large" placeholder="Post Day">
                                        <Option value="Option1-1">{I18n.get('15 Days')}</Option>
                                        <Option value="Option1-2">{I18n.get('One Month')}</Option>
                                        <Option value="Option1-3">{I18n.get('Three Months')}</Option>
                                        <Option value="Option1-4">{I18n.get('All')}</Option>
                                    </Select>
                                </Col>
                                <Col span={4}>
                                    <Button style={{ width: "80%" }} onClick={this.reset.bind(this)}>Reset</Button>
                                </Col>
                            </Row>
                        </InputGroup>
                    </Header>
                    <Content>
                        <Connect query={graphqlOperation(queries.listPostedJobs, this.state.filter)}>
                            {({ data: { listPostedJobs }, loading, error }) => {
                                if (error) return (<h3>ERROR</h3>);
                                if (loading || !listPostedJobs) return (<h3>Loading...</h3>);
                                return (<JobItem jobs={listPostedJobs.items} />);
                            }}
                        </Connect>
                    </Content>
                </Layout>
        );
    }
}

export default JobList;