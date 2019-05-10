import React from 'react';
import { Col, Row, Select, Input, Icon, Layout } from 'antd';
import JobItem from '../components/jobList/jobItem';
import dict from "../components/dictionary/dictionary";
import { I18n, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import { Connect } from "aws-amplify-react";
import { Button } from 'antd/lib/radio';
import * as Util from '../jobListUnitTest/jobListUtil';
import { moment } from 'moment';

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

    filterType = (value) => {
        this.setState({"filter": Util.filterTypeGen(value)});
    }

    filterDate = (value) =>{
        this.setState({"filter": Util.filterDateGen(value)});
    }

    selectSearch = (value) => {
        this.setState({"search": value});
    }

    searchByName = (value) => {
        let searchType = this.state.search;
        this.setState({"filter": Util.searchByNameGen(value, searchType)});
    }

    reset = () => {
        this.setState({"filter":Util.resetGen()});
    }

    render() {
        return (
                <Layout style={{ margin: "16px 24px 16px 24px" }}>
                    <Header  style={{ textAlign: "center", backgroundColor:"gray", height:"15%" }}>
                        <InputGroup compact>
                            <Select onChange={value => this.selectSearch(value)} size="large" defaultValue="Name" style={{ width: "10%" }}>
                                <Option value="Name">Name</Option>
                                <Option value="Location">Location</Option>
                            </Select>
                            <Search
                                style={{ width: '50%' }}
                                placeholder={I18n.get('Search')}
                                enterButton="Search"
                                size="large"
                                onSearch={value => this.searchByName(value)}
                                id="search"
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
                                    <Select onChange={value => this.filterType(value)} style={{ width: "80%" }} size="large" placeholder="Type">
                                        <Option value="Full Time">{I18n.get('Full Time')}</Option>
                                        <Option value="Part Time">{I18n.get('Part Time')}</Option>
                                        <Option value="Internship">{I18n.get('Internship')}</Option>
                                        <Option value="Temporary">{I18n.get('Temporary')}</Option>
                                        <Option value="All">{I18n.get('All')}</Option>
                                    </Select>
                                </Col>
                                <Col span={4}>
                                    <Select style={{ width: "80%" }} size="large" placeholder="Education">
                                        <Option value="Option1-1">Option1-1</Option>
                                        <Option value="Option1-2">Option1-2</Option>
                                    </Select>
                                </Col>
                                <Col span={4}>
                                    <Select style={{ width: "80%" }} size="large" placeholder="Salary">
                                        <Option value="Option1-1">Option1-1</Option>
                                        <Option value="Option1-2">Option1-2</Option>
                                    </Select>
                                </Col>
                                <Col span={4}>
                                    <Select onChange={value => this.filterDate(value)} style={{ width: "80%" }} size="large" placeholder="Post Day">
                                        <Option value="15">{I18n.get('15 Days')}</Option>
                                        <Option value="30">{I18n.get('One Month')}</Option>
                                        <Option value="90">{I18n.get('Three Months')}</Option>
                                        <Option value="All">{I18n.get('All')}</Option>
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
