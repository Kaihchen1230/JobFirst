import { Form, Modal, Input, DatePicker, Tooltip, Button, Icon } from 'antd';
import React from 'react';
import { generate } from 'randomstring';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import { API, graphqlOperation, Auth, I18n } from "aws-amplify";
import moment from 'moment';

const FormItem = Form.Item;

class ModalForm extends React.Component {
  constructor(props) {
    super(props);
    let data = this.props.data;
    this.state = { ...data };
    this.state.addressLine1 = data.companyAddress.addressLine1;
    this.state.addressLine2 = data.companyAddress.addressLine2;
    this.state.postalCode = data.companyAddress.postalCode;
    this.state.state = data.companyAddress.state;
    this.state.addressID = data.companyAddress.id;
    this.state.lan = window.localStorage.getItem('lan');
  }

  componentWillReceiveProps = (nextProps) => {
    let data = nextProps.data;
    this.setState({ ...data });
    this.setState({ addressLine1: data.companyAddress.addressLine1 });
    this.setState({ addressLine2: data.companyAddress.addressLine2 });
    this.setState({ postalCode: data.companyAddress.postalCode });
    this.setState({ state: data.companyAddress.state });
    this.setState({ addressID: data.companyAddress.id });
    this.setState({ lan: window.localStorage.getItem('lan') });
  }


  handleUpdate = (event) => {
    console.log("update", event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async () => {

    //update basic employer information
    let employerData = {
      id: this.state.companyID,
      companyName: this.state.companyName,
      companyEmail: this.state.companyEmail,
      companyPhone: this.state.companyPhone,
      companyWebsite: this.state.companyWebsite,
      companyPic: this.state.companyPic,
      revenue: this.state.revenue,
      ceo: this.state.ceo,
      ceoPic: this.state.ceoPic,
      companyType: this.state.companyType,
      description: this.state.description,
      headquarter: this.state.headquarter,
      size: this.state.size
    }
    let newEmployer = await API.graphql(graphqlOperation(mutations.updateEmployer,
      { input: employerData }));
    console.log("upload new profile", newEmployer);

    //update address
    let addressData = {
      id: this.state.addressID,
      line1: this.state.addressLine1,
      line2: this.state.addressLine2,
      postalCode: this.state.postalCode,
      state: this.state.state
    }
    let newAddress = await API.graphql(graphqlOperation(mutations.updateAddress,
      { input: addressData }));
    console.log("upload new profile", newAddress);

    this.props.onOk();
    // location.reload(true);
  }

  //add one more timeline
  handleAddTimeline = () => {
    let timelines = this.state.timeline;
    let newTimeline = {
      info: "",
      title: "",
      date: moment(new Date(), "YYYY-MM-DD")
    }
    timelines = [...timelines, newTimeline];
    this.setState({ timeline: timelines });
    console.log(this.state.timeline);
  }

  //delete one timeline by index
  handleDeleteTimeline = (index) => {
    let timelines = [...this.state.timeline];
    console.log(index);
    timelines.splice(index, 1);
    this.setState({ timeline: timelines });
  }

  //update the state when timeline title change
  handleTitleUpdate = (e, index) => {
    console.log(index);
    let timelines = [...this.state.timeline];
    console.log(timelines);
    let changeTimeline = timelines[index];
    changeTimeline.title = e.target.value;
    this.setState({ timeline: timelines });
  }

  //update the state when timeline date change
  handleDateUpdate = () => {

  }

  //update the state when description change
  handleDesUpdate = () => {

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
       
    return (
      <Modal
        title="Edit Company Information"
        okText={"Save"}
        visible={this.props.visible}
        onOk={this.handleSubmit}
        onCancel={this.props.onCancel}
        width={800}
      >
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
          >
            <Input
              value={this.state.companyWebsite}
              name="companyWebsite"
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
              name="addressLine1"
              onChange={(event) => { this.handleUpdate(event) }}
              required />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Address Line 2"
          >
            <Input
              value={this.state.addressLine2}
              name="addressLine2"
              onChange={(event) => { this.handleUpdate(event) }}
              style={{ width: "60%" }} />
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

          {/* timelines component */}
          {this.state.timeline.map(
            (element, index) => {
              index;
              return (
                <FormItem
                  {...formItemLayout}
                  key={index}
                  label={"Timeline" + " " + (index + 1)}
                >
                  {/* title input */}
                  <Input value={element.title}
                    id={index + "title"}
                    placeholder="Title"
                    key={index + "title"}
                    onChange={(event) => { this.handleTitleUpdate(event, index) }}
                    style={{ width: "60%" }}
                    required >
                  </Input>
                  <Tooltip title="Delete">
                    <Button
                      onClick={() => { this.handleDeleteTimeline(index) }}>
                      <Icon style={{ fontSize: "15px", marginLeft: "1%" }} type="delete" />
                    </Button>
                  </Tooltip>

                  {/* textArea*/}
                  <Input.TextArea
                    value={element.info}
                    style={{ width: "60%" }}
                    rows={3}
                    name="description"
                    placeholder="Description" />
                  <br />

                  {/* datepicker */}
                  <DatePicker
                    defaultValue={moment(element.date, 'YYYY-MM-DD')}
                    placeholder={I18n.get('Event Date')}
                    name="postDate" />
                </FormItem>)
            })}
          <div style={{ textAlign: "center" }} >
            <Button
              onClick={this.handleAddTimeline}
            >
              <Icon type="plus" />
              Add More Timelines
            </Button>
          </div>


        </Form>
      </Modal>
    );
  }
}

export default ModalForm;

