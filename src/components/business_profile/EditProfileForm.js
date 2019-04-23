import { Form, Input, DatePicker, Select, Cascader, Button, Icon } from 'antd';
import React from 'react';
import { generate } from 'randomstring';
import { ConsoleLogger } from '@aws-amplify/core';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { Auth, I18n } from 'aws-amplify';

const FormItem = Form.Item;

class ModalForm extends React.Component {
  constructor(props) {
    super(props);
    let data = this.props.data;
    this.state = { ...data };
    this.state.lan = window.localStorage.getItem('lan');

  }

  componentDidMount= async()=>{
    let user = await Auth.currentAuthenticatedUser();
    const { attributes } = user;
    let employerData = await API.graphql(graphqlOperation(queries.getEmployer,{id:attributes.sub}));
    employerData = employerData.data.getEmployer;
    console.log("employer",employerData);
  }

  handleUpdate = (event) => {
    console.log("update", event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      }
    };
    let Timelines = () => {
      return this.state.timeline.map(
        (element, index) => {
          index++;
          return (
            <FormItem
              {...formItemLayout}
              key={index}
              label={"Timeline" + " " + index}
            >
              <Input value={element} style={{ width: "60%" }} required>
              </Input>
              <Icon style={{ fontSize: "20px", marginLeft: "1%" }} type="delete" />
            </FormItem>)
        }
      )
    }
    return (
      <Form className="login-form">
        <br />
        <h2 style={{ marginLeft: "7%" }}>Base Information:</h2>
        <FormItem
          {...formItemLayout}
          label="Company Name"
        >
          <Input
            value={this.state.companyName}
            style={{ width: "60%" }}
            name="companyName"
            onChange={(event) => { this.handleUpdate(event) }}
            required />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Website"
          name="companyWebsite"
        >
          <Input
            value={this.state.companyWebsite}
            style={{ width: "60%" }}
            onChange={(event) => { this.handleUpdate(event) }}
            required />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Company Tpye"
        >
          <Input
            value={this.state.companyType}
            style={{ width: "60%" }}
            name="companyType"
            onChange={(event) => { this.handleUpdate(event) }}
            required />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Company Picture"
        >
          <Input
            value={this.state.companyPic}
            style={{ width: "60%" }}
            name="companyPic"
            onChange={(event) => { this.handleUpdate(event) }}
            required />
        </FormItem>
        <Form.Item
          {...formItemLayout}
          label="Description"
        >
          <Input.TextArea
            value={this.state.description}
            style={{ width: "70%" }}
            rows={6}
            name="description"
            onChange={(event) => { this.handleUpdate(event) }}
            placeholder="description" />
        </Form.Item>
        <h2 style={{ marginLeft: "20%" }}>Details:</h2>
        <FormItem
          {...formItemLayout}
          label="Headquarter"
        >
          <Input
            value={this.state.headquarter}
            style={{ width: "60%" }}
            name="headquarter"
            onChange={(event) => { this.handleUpdate(event) }}
            required />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Size"
        >
          <Input
            value={this.state.size}
            style={{ width: "60%" }}
            name="size"
            onChange={(event) => { this.handleUpdate(event) }}
            required />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="revenue"
        >
          <Input
            value={this.state.revenue}
            style={{ width: "60%" }}
            name="revenue"
            onChange={(event) => { this.handleUpdate(event) }}
            required />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="CEO name"
        >
          <Input
            value={this.state.ceo}
            name="ceo"
            onChange={(event) => { this.handleUpdate(event) }}
            style={{ width: "60%" }}
            required />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="CEO Picture"
        >
          <Input
            value={this.state.ceoPic}
            style={{ width: "60%" }}
            name="ceoPic"
            onChange={(event) => { this.handleUpdate(event) }}
            required />
        </FormItem>

        <h2 style={{ marginLeft: "20%" }}>Address:</h2>
        <FormItem
          {...formItemLayout}
          label="Address Line 1"
        >
          <Input
            value={this.state.addressLine1}
            style={{ width: "60%" }}
            name="addressline1"
            onChange={(event) => { this.handleUpdate(event) }}
            required />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Address Line 2"
        >
          <Input
            value={this.state.addressLine2}
            name="addressline2"
            onChange={(event) => { this.handleUpdate(event) }}
            style={{ width: "60%" }} />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="City"
        >
          <Input
            value={this.state.city}
            style={{ width: "60%" }}
            name="city"
            onChange={(event) => { this.handleUpdate(event) }}
            required />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="State"
        >
          <Input
            value={this.state.state}
            style={{ width: "60%" }}
            name="state"
            onChange={(event) => { this.handleUpdate(event) }}
            required />
        </FormItem>
        <h2 style={{ marginLeft: "20%" }}>Timeline:</h2>
        <Timelines />
        <div style={{ textAlign: "center" }}>
          <Icon type="plus" />
          Add More Timelines
              </div>

      </Form>
    );
  }
}

export default ModalForm;

