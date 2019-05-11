import React from 'react';
import { Col, Row, Select, Input, Layout, Slider, InputNumber, Icon, Breadcrumb } from 'antd';
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
                            style={{ width: '53%', color: "black" }}
                            placeholder={I18n.get('Search')}
                            enterButton="Search"
                            size="large"
                            onSearch={value => this.searchByName(value)}
                            id="search"
                        />
                        <Button className="button1" style={{ marginLeft: "1%", width: "6%", height: "40px", }} onClick={this.reset.bind(this)}><Icon type="undo" /> Reset</Button>
                    </InputGroup>
                    <InputGroup compact>
                        <Select
                            showSearch
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            style={{ width: "30%" }}
                            size="large"
                            placeholder="Filter By Job Category">
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
                        <Select
                            onChange={value => this.filterType(value)}
                            style={{ marginLeft: "1%", width: "19%" }} size="large"
                            placeholder="Filter By Job Type">
                            <Option value="Full Time">{I18n.get('Full Time')}</Option>
                            <Option value="Part Time">{I18n.get('Part Time')}</Option>
                            <Option value="Internship">{I18n.get('Internship')}</Option>
                            <Option value="Temporary">{I18n.get('Temporary')}</Option>
                            <Option value="All">{I18n.get('All')}</Option>
                        </Select>
                        <Select
                            style={{ marginLeft: "1%", width: "19%" }}
                            size="large"
                            placeholder="Filter By Education Requirement">
                            <Option value="No Requirement">No Requirement</Option>
                            <Option value="Associate">Associate</Option>
                            <Option value="Bachelor">Bachelor</Option>
                            <Option value="Master">Master</Option>
                            <Option value="Doctoral">Doctoral</Option>
                        </Select>
                    </InputGroup>
                    <InputGroup compact>
                        <div style={{ textAlign: "left", width: "35%" }}>
                            <h4>Minimum Wage</h4>
                            <Row>
                                <Col span={10}>
                                    <Slider
                                        min={7}
                                        max={100}
                                        onChange={this.setSalary}
                                    />
                                </Col>
                                <Col span={1}>
                                    <InputNumber
                                        min={7}
                                        max={100}
                                        style={{ marginLeft: 16 }}
                                        onChange={this.setSalary}
                                    />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ textAlign: "left", width: "35%" }}>
                            <h4>Job Post Date Within</h4>
                            <Row>
                                <Col span={10}>
                                    <Slider
                                        min={0}
                                        max={365}
                                        onChange={this.setSalary}
                                    />
                                </Col>
                                <Col span={1}>
                                    <InputNumber
                                        min={0}
                                        max={365}
                                        style={{ marginLeft: 16 }}
                                        onChange={this.setDay}
                                    />
                                </Col>
                            </Row>
                        </div>
                    </InputGroup>
                </Header>
                <Content style={{ padding: '0 2%' }}>
                    <Breadcrumb style={{ margin: '4%' }}>
                        <Connect query={graphqlOperation(queries.listPostedJobs, this.state.filter)}>
                            {({ data: { listPostedJobs }, loading, error }) => {
                                if (error) return (<h3>ERROR</h3>);
                                if (loading || !listPostedJobs) return (<h3>Loading...</h3>);
                                return (<JobItem jobs={listPostedJobs.items} />);
                            }}
                        </Connect>
                    </Breadcrumb>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    JobFirst ©2019 Created by JobFirst Group
                </Footer>
            </Layout>
        );
    }
}

export default JobList;
