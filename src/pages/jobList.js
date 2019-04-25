import React from 'react';
import { Col, Row, Select, Input, Icon, Menu, Layout } from 'antd';
import JobItem from '../components/jobList/jobItem';
import dict from "../components/dictionary/dictionary";
import { I18n, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import { Connect } from "aws-amplify-react";

const {
    Header, Footer, Sider, Content,
} = Layout;
const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const Option = Select.Option;
const InputGroup = Input.Group;
let lan = window.localStorage.getItem('lan');
I18n.putVocabularies(dict);
I18n.setLanguage(lan);
class JobList extends React.Component {

    state = {}

    handleChange = (value) => {
        console.log('select ${value}');
    }

    render() {
        return (
            <container>
                <Layout>
                    <Header>
                        <InputGroup compact>
                            <Select size="large" defaultValue="Name" style={{ width: "10%" }}>
                                <Option value="Name">Name</Option>
                                <Option value="Location">Location</Option>
                            </Select>
                            <Search
                                style={{ width: '54%' }}
                                placeholder={I18n.get('Search')}
                                enterButton="Search"
                                size="large"
                                onSearch={value => console.log(value)}
                            />
                        </InputGroup>
                        <InputGroup compact>
                            <Row gutter={8} style={{ width: '80%' }}>
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
                            </Row>
                        </InputGroup>
                    </Header>
                </Layout>
                <Layout>
                    <Content>
                        <Connect query={graphqlOperation(queries.listPostedJobs)}>
                            {({ data: { listPostedJobs }, loading, error }) => {
                                if (error) return (<h3>ERROR</h3>);
                                if (loading || !listPostedJobs) return (<h3>Loading...</h3>);
                                return (<JobItem jobs={listPostedJobs.items} />);
                            }}
                        </Connect>
                    </Content>
                </Layout>

            </container>

        );
    }
}

export default JobList;