import React from "react";
import { Form, Icon, Input, Button, Tooltip, DatePicker, Select, InputNumber, message } from 'antd';
import moment from 'moment';
import { Auth, I18n } from 'aws-amplify';
import { getUser } from '../../services/auth';
import dict from "../dictionary/dictionary";
import * as mutations from "../../graphql/mutations";
import { API, graphqlOperation } from 'aws-amplify';

const Option = Select.Option;
const { TextArea } = Input;
let id = 0;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
}

function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

class PostJobForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    remove = (k) => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    }

    add = () => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(id++);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });
    }

    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = (e) => {
        let date = formatDate();
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //console.log('Received values of form: ', values);
                if (values.salary === 0) {
                    message.error("Salary cannot be equal or less than zero, please leave blank or input a greater number")
                    return
                }
                const AddressInput = {
                    line1: values.line1,
                    line2: values.line2,
                    city: values.city,
                    postalCode: values.postalCode,
                    state: values.state,
                }
                //console.log("input for address: ", AddressInput);
                API.graphql(graphqlOperation(mutations.createAddress, { input: AddressInput }))
                    .then((address) => {
                        const addID = address.data.createAddress.id;
                        const PostedJobInput = {
                            postedJobCompanyId: getUser().sub,
                            jobTitle: values.jobTitle,
                            jobType: values.jobType,
                            description: values.description,
                            requirements: values.requirement ? values.requirement : null,
                            salary: values.salary ? values.salary : null,
                            datePosted: date,
                            deadline: values.deadline.format('YYYY-MM-DD'),
                            postedJobLocationId: addID,
                            searchFieldName: values.jobTitle.toLowerCase(),
                            searchFieldLocation: values.line1.toLowerCase(),
                            clickedCounts: 0,
                            jobCategory: values.jobCategory, //TODO
                            education: values.education, //TODO
                        }
                        console.log(PostedJobInput);
                        API.graphql(graphqlOperation(mutations.createPostedJob, { input: PostedJobInput }))
                            .then(postedJob => {
                                message.success("Successfully Posted A New Job");
                            }).catch(err => {
                                console.log("Error in posting job", err)
                                message.error("Error in posting a new job");
                            })
                    }).catch((err) => {
                        console.log("Error in creating address", err)
                        message.error("Error in creating address");
                    })
            }
        });
    }

    render() {
        const {
            getFieldDecorator, getFieldValue, getFieldsError, getFieldError, isFieldTouched,
        } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 3 },
            },
        };
        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => (
            <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? 'Requirements' : ''}
                required={false}
                key={k}
            >
                {getFieldDecorator(`requirement[${k}]`)(
                    <Input placeholder="requirement" style={{ width: '60%', marginRight: 8 }} />
                )}
                {keys.length > 0 ? (
                    <Icon
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                        onClick={() => this.remove(k)}
                    />
                ) : null}
            </Form.Item>
        ));

        const jobTitleError = isFieldTouched('jobTitle') && getFieldError('jobTitle');
        const line1Error = isFieldTouched('line1') && getFieldError('line1');
        const cityError = isFieldTouched('city') && getFieldError('city');
        const postalCodeError = isFieldTouched('postalCode') && getFieldError('postalCode');
        const stateError = isFieldTouched('state') && getFieldError('state');
        const deadlineError = isFieldTouched('deadline') && getFieldError('deadline');
        const jobTypeError = isFieldTouched('jobType') && getFieldError('jobType');
        const descriptionError = isFieldTouched('description') && getFieldError('description');
        const jobCategoryError = isFieldTouched('jobCategory') && getFieldError('jobCategory');
        const educationTypeError = isFieldTouched('education') && getFieldError('education');

        return (
            <div align="center">
                <br />
                <h1>{I18n.get('Post a New Job')}</h1>
                <Form onSubmit={this.handleSubmit} className="main-form" style={{ "width": "50%" }} name="jobPost">
                    <Form.Item
                        label={I18n.get('Job Title')}
                        required={true}
                        validateStatus={jobTitleError ? 'error' : ''}
                        help={jobTitleError || ''}>
                        {getFieldDecorator('jobTitle', {
                            rules: [{ required: true, message: 'Please enter the job title!' }]
                        })(
                            <Input placeholder={I18n.get('Enter the Job Title')}
                                name="jobTitle"
                                suffix={
                                    <Tooltip title={I18n.get('Enter the name of the job')}>
                                        <Icon type="info-circle" />
                                    </Tooltip>}
                            />
                        )}
                    </Form.Item>

                    <Form.Item
                        label={I18n.get('Address Line 1')}
                        required={true}
                        validateStatus={line1Error ? 'error' : ''}
                        help={line1Error || ''}>
                        {getFieldDecorator('line1', {
                            rules: [{ required: true, message: 'Please enter the address line 1!' }]
                        })(
                            <Input placeholder={I18n.get('Address Line 1')}
                                name="line1"
                                suffix={
                                    <Tooltip title={I18n.get('Line 1 of job address')}>
                                        <Icon type="info-circle" />
                                    </Tooltip>}
                            />
                        )}
                    </Form.Item>

                    <Form.Item
                        label={I18n.get('Address Line 2')}
                        required={false}>
                        {getFieldDecorator('line2', {
                            rules: [{ required: false, message: 'Please enter the address line 2!' }]
                        })(
                            <Input placeholder={I18n.get('Address Line 2')}
                                name="line2"
                                suffix={
                                    <Tooltip title={I18n.get('Line 2 of job address')}>
                                        <Icon type="info-circle" />
                                    </Tooltip>}
                            />
                        )}
                    </Form.Item>

                    <Form.Item
                        label={I18n.get('City')}
                        required={true}
                        validateStatus={cityError ? 'error' : ''}
                        help={cityError || ''}>
                        {getFieldDecorator('city', {
                            rules: [{ required: true, message: 'Please enter the city!' }]
                        })(
                            <Input placeholder={I18n.get('City')}
                                name="city"
                                suffix={
                                    <Tooltip title={I18n.get('Enter the city of the job location')}>
                                        <Icon type="info-circle" />
                                    </Tooltip>}
                            />
                        )}
                    </Form.Item>

                    <Form.Item
                        label={I18n.get('Postal Code')}
                        required={true}
                        validateStatus={postalCodeError ? 'error' : ''}
                        help={postalCodeError || ''}>
                        {getFieldDecorator('postalCode', {
                            rules: [{ required: true, message: 'Please enter the postal code!' }]
                        })(
                            <Input placeholder={I18n.get('Postal Code')}
                                name="postalCode"
                                suffix={
                                    <Tooltip title={I18n.get('Enter the postal code of the job location')}>
                                        <Icon type="info-circle" />
                                    </Tooltip>}
                            />
                        )}
                    </Form.Item>

                    <Form.Item
                        label={I18n.get('State')}
                        required={true}
                        validateStatus={stateError ? 'error' : ''}
                        help={stateError || ''}>
                        {getFieldDecorator('state', {
                            rules: [{ required: true, message: 'Please enter the state of the job location!' }]
                        })(
                            <Input placeholder={I18n.get('State')}
                                name="state"
                                suffix={
                                    <Tooltip title={I18n.get('Enter the state of the job location')}>
                                        <Icon type="info-circle" />
                                    </Tooltip>}
                            />
                        )}
                    </Form.Item>

                    <Form.Item
                        label={I18n.get('Deadline')}
                        required={true}
                        validateStatus={deadlineError ? 'error' : ''}
                        help={deadlineError || ''}>
                        {getFieldDecorator('deadline', {
                            rules: [{ required: true, message: 'Please enter the deadline!' }]
                        })(
                            <DatePicker
                                format="YYYY-MM-DD"
                                disabledDate={disabledDate}
                                placeholder={I18n.get('Deadline')}
                                name="deadline" />
                        )}
                    </Form.Item>

                    <Form.Item
                        label={I18n.get('Job Type')}
                        required={true}
                        validateStatus={jobTypeError ? 'error' : ''}
                        help={jobTypeError || ''}>
                        {getFieldDecorator('jobType', {
                            rules: [{ required: true, message: 'Please select the job type!' }]
                        })(
                            <Select placeholder={I18n.get('Job Type')} name="jobType" >
                                <Option value="Full Time">{I18n.get('Full Time')}</Option> 
                                <Option value="Part Time">{I18n.get('Part Time')}</Option>
                                <Option value="Internship">{I18n.get('Internship')}</Option>
                                <Option value="Temporary">{I18n.get('Temporary')}</Option>
                            </Select>
                        )}
                    </Form.Item>

                    <Form.Item
                        label={I18n.get('Job Category')}
                        required={true}
                        validateStatus={jobCategoryError ? 'error' : ''}
                        help={jobCategoryError || ''}>
                        {getFieldDecorator('jobCategory', {
                            rules: [{ required: true, message: 'Please select the job Category!' }]
                        })(
                            <Select 
                                showSearch
                                optionFilterProp="children"
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                placeholder={I18n.get('Job Category')}
                                name="jobCategory" >
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
                            </Select>
                        )}
                    </Form.Item>

                    <Form.Item
                        label={I18n.get('Enter Job Description')}
                        required={true}
                        validateStatus={descriptionError ? 'error' : ''}
                        help={descriptionError || ''}>
                        {getFieldDecorator('description', {
                            rules: [{ required: true, message: 'Please enter the job description!' }]
                        })(
                            <TextArea
                                placeholder={I18n.get('Enter Job Description')}
                                autosize={{ minRows: 2, maxRows: 6 }}
                                name="description"
                            />
                        )}
                    </Form.Item>

                    <Form.Item
                        label={I18n.get('Education')}
                        required={true}
                        validateStatus={educationTypeError ? 'error' : ''}
                        help={educationTypeError || ''}>
                        {getFieldDecorator('education', {
                            rules: [{ required: true, message: 'Please select the job type!' }]
                        })(
                            <Select placeholder={I18n.get('Education')} name="education" >
                                <Option value="No Requirement">No Requirement</Option> 
                                <Option value="Associate">Associate</Option>
                                <Option value="Bachelor">Bachelor</Option>
                                <Option value="Master">Master</Option>
                                <Option value="Doctoral">Doctoral</Option>
                            </Select>
                        )}
                    </Form.Item>

                    {formItems}
                    <Form.Item {...formItemLayoutWithOutLabel}>
                        <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
                            <Icon type="plus" /> {I18n.get('Enter Job Requirements')}
                        </Button>
                    </Form.Item>

                    <Form.Item label={I18n.get('Salary')}>
                        {getFieldDecorator('salary', {
                            rules: [{ type: "number", required: false, message: 'Must be in whole number' }]
                        })(
                            <InputNumber min={0} />
                        )}
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                        // disabled={hasErrors(getFieldsError())}
                        >
                            {I18n.get('Submit Job')}
                        </Button>
                    </Form.Item>
                    <br />
                </Form>
            </div >
        );
    }
}

const PostJob = Form.create({ name: 'post_job' })(PostJobForm);
export default PostJob;