import React from 'react';
import { Col, Row, Select, Input, Layout, Slider, InputNumber, Icon, Breadcrumb } from 'antd';
import JobItem from '../components/jobList/jobItem';
import { I18n, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import { Connect } from "aws-amplify-react";
import { Button } from 'antd/lib/radio';
import * as Util from '../test/jobListUnitTest/jobListUtil';
import "../style/jobList.css"


// The job list page for all the job that are posted by employers

const {
    Header, Footer, Sider, Content,
} = Layout;
const Search = Input.Search;
const Option = Select.Option;
const InputGroup = Input.Group;
let searchType = "Name";

/**
 * The class jobList will render the page of job list for all the posted job by employer
 * It will render the job pool containing all the job cards (data from AWS dynamoDB)
 * It will render the a search and filter section that allows you do search and filter (AWS API)
 * It will render the a learn more button the job cards so user can direct to jobDescription page
 */

class JobList extends React.Component {

    /**
     * the state object to store the query statement for filter and search
     * @type {Object} state
     */
    state = {
        "filter": { clickedCounts: { ge: 0 } },
        salary: 7,
        days: 365,
    }

    /**
     * Update the filter object in state with a filter query by job type
     * @param {string} value - the job type you want to filter
     */
    filterType = (value) => {
        let oldFilter = { ...this.state.filter };
        this.setState({ "filter": Util.filterTypeGen(value, oldFilter) });
    }

    /**
     * Update the filter object in state with a filter query by job category
     * @param {string} value - the job category you want to filter
     */
    filterCategory = (value) => {
        let oldFilter = { ...this.state.filter };
        this.setState({ "filter": Util.filterCateGen(value, oldFilter) });
    }

    /**
     * Update the filter object in state with a filter query by required education
     * @param {string} value - the required education you want to filter
     */
    filterEducation = (value) => {
        let oldFilter = { ...this.state.filter };
        this.setState({ "filter": Util.filterEduGen(value, oldFilter) });
    }

    /**
     * Update the filter object in state with a filter query by post date
     */
    filterDate = () => {
        let oldFilter = { ...this.state.filter };
        let days = this.state.days;
        this.setState({ "filter": Util.filterDateGen(days, oldFilter) });
    }

    /**
     * Update the filter object in state with a filter query by job salary
     */
    filterSalary = () => {
        let oldFilter = { ...this.state.filter };
        let salary = this.state.salary;
        this.setState({ "filter": Util.filterSalaryGen(salary, oldFilter) });
    }

    /**
     * Update the variable searchType with the input value
     * @param {string} value - the input value either Name or Location
     */
    selectSearch = (value) => {
        searchType = value;
    }

    /**
     * Update the filter object in state with a filter query by input name or location
     * @param {string} value - the input name or location you want to filter
     */
    searchByName = (value) => {
        let oldFilter = { ...this.state.filter };
        this.setState({ "filter": Util.searchByNameGen(value, searchType, oldFilter) });
    }

    /**
     * Reset the filter object in state back to original value
     */
    reset = () => {
        this.setState({ "filter": Util.resetGen() });
    }

    /**
     * Update the salary object in state with an input salary
     * @param {string} value - the input salary
     */
    setSalary = (value) => {
        this.setState({ salary: value });
    }

    /**
     * Update the days object in state with an input day
     * @param {string} value - the input day
     */
    setDay = (value) => {
        this.setState({ days: value });
    }

    render() {
        let { filter, salary, days } = this.state;
        return (
            <Layout >
                <Header style={{ textAlign: "center", height: "15%" }}>
                    <Row>
                        <Col span={8} className="colOne">
                            <span className="slogon">Hire expert for any job, online</span>
                            <div className="slogon2">Millisons of small businesses and new immigrants use JobFirst
                                to turn their ideas into reality
                            </div>
                            <div className="buttonGroup">
                                <span className="slogonButton">
                                    I want to Hire
                                </span >
                                <span className="slogonButton2">I want to Work</span>
                            </div>
                        </Col>
                        <Col style={{ margin: "-5% 0 -5% 3%" }} span={12}>
                            <div className="banner" />
                        </Col>
                    </Row>
                    <div>
                        <InputGroup compact>
                            <Select onChange={this.selectSearch} size="large" defaultValue="Name" style={{ width: "10%" }}>
                                <Option value="Name">{I18n.get('Name')}</Option>
                                <Option value="Location">{I18n.get('Location')}</Option>
                            </Select>
                            <Search
                                style={{ width: '53%', color: "black" }}
                                placeholder={I18n.get('Search')}
                                enterButton="Search"
                                size="large"
                                onSearch={this.searchByName}
                                id="search"
                            />
                            <Button
                                className="resetButton"
                                style={{ marginLeft: "1%", width: "6%" }}
                                onClick={this.reset.bind(this)}>
                                <Icon type="undo" /> Reset
                        </Button>
                        </InputGroup>
                        <InputGroup compact >
                            <div style={{ textAlign: "left", width: "30%" }}>
                                <h4>{I18n.get('Filter By Job Category')}</h4>
                                <Select
                                    className="dropBox"
                                    showSearch
                                    optionFilterProp="children"
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                    onChange={this.filterCategory}
                                    size="large"
                                    style={{ width: "100%" }}
                                    defaultValue="All" >
                                    <Option value="Accountancy, banking and finance">{I18n.get('Accountancy, banking and finance')}</Option>
                                    <Option value="Business, consulting and management">{I18n.get('Business, consulting and management')}</Option>
                                    <Option value="Charity and voluntary work">{I18n.get('Charity and voluntary work')}</Option>
                                    <Option value="Creative arts and design">{I18n.get('Creative arts and design')}</Option>
                                    <Option value="Energy and utilities">{I18n.get('Energy and utilities')}</Option>
                                    <Option value="Engineering and manufacturing">{I18n.get('Engineering and manufacturing')}</Option>
                                    <Option value="Environment and agriculture">{I18n.get('Environment and agriculture')}</Option>
                                    <Option value="Healthcare">{I18n.get('Healthcare')}</Option>
                                    <Option value="Information technology">{I18n.get('Information technology')}</Option>
                                    <Option value="Law">{I18n.get('Law')}</Option>
                                    <Option value="Marketing, advertising and PR">{I18n.get('Marketing, advertising and PR')}</Option>
                                    <Option value="Media and internet">{I18n.get('Media and internet')}</Option>
                                    <Option value="Property and construction">{I18n.get('Property and construction')}</Option>
                                    <Option value="Public services and administration">{I18n.get('Public services and administration')}</Option>
                                    <Option value="Recruitment and HR">{I18n.get('Recruitment and HR')}</Option>
                                    <Option value="Retail">{I18n.get('Retail')}</Option>
                                    <Option value="Sales">{I18n.get('Sales')}</Option>
                                    <Option value="Science and pharmaceuticals">{I18n.get('Science and pharmaceuticals')}</Option>
                                    <Option value="Social care">{I18n.get('Social care')}</Option>
                                    <Option value="Teacher training and education">{I18n.get('Teacher training and education')}</Option>
                                    <Option value="Transport and logistics">{I18n.get('Transport and logistics')}</Option>
                                    <Option value="All">{I18n.get('All')}</Option>
                                </Select>
                            </div>
                            <div style={{ textAlign: "left", width: "20%" }}>
                                <h4>{I18n.get('Filter By Job Type')}</h4>
                                <Select
                                    onChange={this.filterType}
                                    style={{ marginLeft: "2%", width: "98%" }}
                                    size="large"
                                    defaultValue="All" >
                                    <Option value="Full Time">{I18n.get('Full Time')}</Option>
                                    <Option value="Part Time">{I18n.get('Part Time')}</Option>
                                    <Option value="Internship">{I18n.get('Internship')}</Option>
                                    <Option value="Temporary">{I18n.get('Temporary')}</Option>
                                    <Option value="All">{I18n.get('All')}</Option>
                                </Select>
                            </div>
                            <div style={{ textAlign: "left", width: "20%" }}>
                                <h4>{I18n.get('Filter By Education Requirement')}</h4>
                                <Select
                                    style={{ marginLeft: "2%", width: "98%" }}
                                    size="large"
                                    onChange={this.filterEducation}
                                    defaultValue="All" >
                                    <Option value="No Requirement">{I18n.get('No Requirement')}</Option>
                                    <Option value="Associate">{I18n.get('Associate')}</Option>
                                    <Option value="Bachelor">{I18n.get('Bachelor')}</Option>
                                    <Option value="Master">{I18n.get('Master')}</Option>
                                    <Option value="Doctoral">{I18n.get('Doctoral')}</Option>
                                    <Option value="All">{I18n.get('All')}</Option>
                                </Select>
                            </div>

                        </InputGroup>
                        <InputGroup compact>
                            <div style={{ textAlign: "left", width: "20%" }}>
                                <h4>{I18n.get('Minimum Wage')}</h4>
                                <Row>
                                    <Col span={10}>
                                        <Slider
                                            min={7}
                                            max={100}
                                            onChange={this.setSalary}
                                            value={typeof salary === 'number' ? salary : 7}
                                            step={0.5}
                                        />
                                    </Col>
                                    <Col span={1}>
                                        <InputNumber
                                            min={7}
                                            max={100}
                                            style={{ marginLeft: 16 }}
                                            value={salary}
                                            onChange={this.setSalary}
                                        />
                                    </Col>
                                </Row>
                            </div>
                            <div style={{ textAlign: "center", width: "15%" }}>
                                <Button
                                    className="applyButton"
                                    style={{ marginTop: "5%", width: "40%", }}
                                    onClick={this.filterSalary}>
                                    Apply
                            </Button>
                            </div>
                            <div style={{ textAlign: "left", width: "20%" }}>
                                <h4>{I18n.get('Job Posted Within')}</h4>
                                <Row>
                                    <Col span={10}>
                                        <Slider
                                            min={1}
                                            max={365}
                                            onChange={this.setDay}
                                            value={typeof days === 'number' ? days : 365}
                                        />
                                    </Col>
                                    <Col span={1}>
                                        <InputNumber
                                            min={1}
                                            max={365}
                                            style={{ marginLeft: 16 }}
                                            value={days}
                                            onChange={this.setDay}
                                            step={10}
                                        />
                                    </Col>
                                </Row>
                            </div>
                            <div style={{ textAlign: "center", width: "15%" }}>
                                <Button
                                    className="applyButton"
                                    style={{ marginTop: "5%", width: "40%", }}
                                    onClick={this.filterDate}>
                                    Apply
                            </Button>
                            </div>
                        </InputGroup>
                    </div>
                </Header>
                <Content>
                    <Connect query={graphqlOperation(queries.listPostedJobs, { "filter": filter })}>
                        {({ data: { listPostedJobs }, loading, error }) => {
                            if (error) return (<h3>ERROR</h3>);
                            if (loading || !listPostedJobs) return (<h3>Loading...</h3>);
                            return (<JobItem jobs={listPostedJobs.items} />);
                        }}
                    </Connect>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    {I18n.get('JobFirst')} ©2019 {I18n.get('Created by JobFirst Group')}
                </Footer>
            </Layout>
        );
    }
}

export default JobList;
