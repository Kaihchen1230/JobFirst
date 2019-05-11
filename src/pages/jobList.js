import React from 'react';
import { Col, Row, Select, Input, Layout, Slider, InputNumber } from 'antd';
import JobItem from '../components/jobList/jobItem';
import dict from "../components/dictionary/dictionary";
import { I18n, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import { Connect } from "aws-amplify-react";
import { Button } from 'antd/lib/radio';
import * as Util from '../jobListUnitTest/jobListUtil';
import { Link, navigate } from "gatsby";
import "../style/jobList.css"
import HomeImg from "../../static/home.png"

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
        "filter": {

        },
        salary: 7,
        days: 365,
    }

    filterType = (value) => {
        this.setState({ "filter": Util.filterTypeGen(value) });
    }

    filterDate = (value) => {
        this.setState({ "filter": Util.filterDateGen(value) });
    }

    selectSearch = (value) => {
        this.setState({ "search": value });
    }

    searchByName = (value) => {
        let searchType = this.state.search;
        this.setState({ "filter": Util.searchByNameGen(value, searchType) });
    }

    reset = () => {
        this.setState({ "filter": Util.resetGen() });
    }

    render() {
        return (
            <Layout >
                <Header style={{ textAlign: "center", height: "15%" }}>
                    <Row>
                        <Col span={8} className="colOne">
                            <span className="slogon">Hire expert for any job, online</span>
                            <div className="slogon2">Millisons of small businesses and new immigrants use JobFirst
                                to turn their ideas into reality
                            </div>
                            <div>
                                <Button className="button1">
                                    I want to Hire
                                </Button >
                                <Button className="button2">I want to Work</Button>
                            </div>
                        </Col>
                        <Col style={{ margin: "-5% 0 -5% 3%" }} span={12}>
                            <div className="banner" />
                        </Col>
                    </Row>

                    <InputGroup compact>
                        <Select onChange={value => this.selectSearch(value)} size="large" defaultValue="Name" style={{ width: "10%" }}>
                            <Option value="Name">Name</Option>
                            <Option value="Location">Location</Option>
                        </Select>
                        <Search
                            style={{ width: '50%', color: "black" }}
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
                                <Select
                                    showSearch
                                    optionFilterProp="children"
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                    style={{ width: "80%" }}
                                    size="large"
                                    placeholder="Category">
                                    <Option value="Accountancy, banking and finance">Accountancy, banking and finance</Option>
                                    <Option value="Business, consulting and management">Business, consulting and management</Option>
                                    <Option value="Charity and voluntary work">Charity and voluntary work</Option>
                                    <Option value="Creative arts and design">Creative arts and design</Option>
                                    <Option value="Energy and utilities">Energy and utilities</Option>
                                    <Option value="Engineering and manufacturing">Engineering and manufacturing</Option>
                                    <Option value="Environment and agriculture">Environment and agriculture</Option>
                                    <Option value="Healthcare">Healthcare</Option>
                                    <Option value="Information technology">Information technology</Option>
                                    <Option value="Law">Law</Option>
                                    <Option value="Marketing, advertising and PR">Marketing, advertising and PR</Option>
                                    <Option value="Media and internet">Media and internet</Option>
                                    <Option value="Property and construction">Property and construction</Option>
                                    <Option value="Public services and administration">Public services and administration</Option>
                                    <Option value="Recruitment and HR">Recruitment and HR</Option>
                                    <Option value="Retail">Retail</Option>
                                    <Option value="Sales">Sales</Option>
                                    <Option value="Science and pharmaceuticals">Science and pharmaceuticals</Option>
                                    <Option value="Social care">Social care</Option>
                                    <Option value="Teacher training and education">Teacher training and education</Option>
                                    <Option value="Transport and logistics">Transport and logistics</Option>
                                </Select>
                            </Col>
                            <Col span={4}>
                                <Select
                                    onChange={value => this.filterType(value)}
                                    style={{ width: "80%" }} size="large"
                                    placeholder="Type">
                                    <Option value="Full Time">{I18n.get('Full Time')}</Option>
                                    <Option value="Part Time">{I18n.get('Part Time')}</Option>
                                    <Option value="Internship">{I18n.get('Internship')}</Option>
                                    <Option value="Temporary">{I18n.get('Temporary')}</Option>
                                    <Option value="All">{I18n.get('All')}</Option>
                                </Select>
                            </Col>
                            <Col span={4}>
                                <Select
                                    style={{ width: "80%" }}
                                    size="large"
                                    placeholder="Education">
                                    <Option value="No Requirement">No Requirement</Option>
                                    <Option value="Associate">Associate</Option>
                                    <Option value="Bachelor">Bachelor</Option>
                                    <Option value="Master">Master</Option>
                                    <Option value="Doctoral">Doctoral</Option>
                                </Select>
                            </Col>
                            <Col span={4}>
                                {/* <Select
                                    style={{ width: "80%" }}
                                    size="large"
                                    placeholder="Salary">
                                    <Option value="Option1-1">Option1-1</Option>
                                    <Option value="Option1-2">Option1-2</Option>
                                </Select> */}
                                <Row>
                                    <Col span={12}>
                                        <Slider
                                            min={7}
                                            max={100}
                                            onChange={this.setSalary}
                                            // value={typeof this.state.salary === 'number' ? {this.setState({ salary: 7 })}}
                                        />
                                    </Col>
                                    <Col span={4}>
                                        <InputNumber
                                            min={7}
                                            max={100}
                                            style={{ marginLeft: 16 }}
                                            value={this.state.salary}
                                            onChange={this.setSalary}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={4}>
                                <Select
                                    onChange={value => this.filterDate(value)}
                                    style={{ width: "80%" }}
                                    size="large"
                                    placeholder="Post Day">
                                    <Option value="15">{I18n.get('Within 15 Days')}</Option>
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
