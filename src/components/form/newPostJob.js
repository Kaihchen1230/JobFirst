import React from "react";
import { Form, Icon, Input, Button, Tooltip, DatePicker, Select, InputNumber } from 'antd';
import { Auth, I18n } from 'aws-amplify';
import dict from "../dictionary/dictionary";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';

const Option = Select.Option;
const { TextArea } = Input;
let id = 0;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

class PostJobForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            today: date,
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
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        console.log(this.state.today);
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
                sm: { span: 20, offset: 4 },
            },
        };
        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => (
            <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? 'Requirement' : ''}
                required={false}
                key={k}
            >
                {getFieldDecorator(`names[${k}]`, {
                    validateTrigger: ['onChange', 'onBlur'],
                    rules: [{
                        required: true,
                        whitespace: true,
                        message: "Please enter the requirement for the job.",
                    }],
                })(
                    <Input placeholder="requirement" style={{ width: '60%', marginRight: 8 }} />
                )}
                {keys.length > 1 ? (
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


        return (
            <div align="center">
                <br />
                <h1>{I18n.get('Post a New Job')}</h1>
                <Form onSubmit={this.handleSubmit} className="main-form" style={{ "width": "50%" }} name="jobPost">
                    <Form.Item
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

                    <Form.Item>
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
                        validateStatus={cityError ? 'error' : ''}
                        help={cityError || ''}>
                        {getFieldDecorator('city', {
                            rules: [{ required: true, message: 'Please enter the city!' }]
                        })(
                            <Input placeholder={I18n.get('Postal Code')}
                                name="city"
                                suffix={
                                    <Tooltip title={I18n.get('Enter the city of the job location')}>
                                        <Icon type="info-circle" />
                                    </Tooltip>}
                            />
                        )}
                    </Form.Item>

                    <Form.Item
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
                        validateStatus={deadlineError ? 'error' : ''}
                        help={deadlineError || ''}>
                        {getFieldDecorator('deadline', {
                            rules: [{ required: true, message: 'Please enter the deadline!' }]
                        })(
                            <DatePicker
                                placeholder={I18n.get('Deadline')}
                                name="deadline" />
                        )}
                    </Form.Item>

                    <Form.Item
                        validateStatus={jobTypeError ? 'error' : ''}
                        help={jobTypeError || ''}>
                        {getFieldDecorator('jobType', {
                            rules: [{ required: true, message: 'Please enter the job type!' }]
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

                    {formItems}
                    <Form.Item {...formItemLayoutWithOutLabel}>
                        <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
                            <Icon type="plus" /> Add requirement
                        </Button>
                    </Form.Item>

                    <Form.Item label="salary">
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
                            disabled={hasErrors(getFieldsError())}
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