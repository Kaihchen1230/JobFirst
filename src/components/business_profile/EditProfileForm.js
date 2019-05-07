import { Form, Modal, Input, DatePicker, Tooltip, Button, Icon, message } from 'antd';
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
    this.state.city = data.companyAddress.city;
    this.state.postalCode = data.companyAddress.postalCode;
    this.state.state = data.companyAddress.state;
    this.state.addressID = data.companyAddress.id;
    this.state.timelineNum = data.timeline.length;
    this.state.originalTimeline = data.timeline;
    this.state.isTimelineChange= false;
    this.state.isAddressChange= false;
  }

  componentWillReceiveProps = (nextProps) => {
    let data = nextProps.data;
    this.setState({ ...data });
    this.setState({ addressLine1: data.companyAddress.addressLine1 });
    this.setState({ addressLine2: data.companyAddress.addressLine2 });
    this.setState({ city: data.companyAddress.city});
    this.setState({ postalCode: data.companyAddress.postalCode });
    this.setState({ state: data.companyAddress.state });
    this.setState({ addressID: data.companyAddress.id });
    this.setState({ lan: window.localStorage.getItem('lan') });
    this.setState({timelineNum : data.timeline.length});
    this.setState({originalTimeline : data.timeline});
    // console.log(this.state);
  }


  handleUpdate = (event) => {
    // console.log("change",event.target.value);
    let name = event.target.value;
    if(name === "addressLine1" || name === "addressLine2" || name === "city" ||
      name === "postalCode" || name=== "state")
      this.setState({isAddressChange:true})
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //update timelines on AWS
  updateTimeline = async ()=>{
    let newLength = this.state.timeline.length;
    let originalLen = this.state.timelineNum;
    let timelines = this.state.timeline;

    //update events
    let updateNum = originalLen < newLength? originalLen : newLength;
    for(let index = 0; index < updateNum; index++){
      let timelineData = timelines[index]
      timelineData.timelineCompanyId = this.state.companyID;
      let timeline = await API.graphql(graphqlOperation(mutations.updateTimeline,
        {input: timelineData}));
      console.log("update timeline", timeline);
    }
    
    //create new event
    if(originalLen < newLength){
      for(let index = originalLen; index < newLength; index++){
        let timelineData =timelines[index];
        timelineData.timelineCompanyId = this.state.companyID;
        let timeline = await API.graphql(graphqlOperation(mutations.createTimeline,
          {input: timelineData}));
        console.log("create timeline", timeline);
      }
    }
    //delete extra event
    else if(originalLen > newLength){
      for(let index = newLength; index < originalLen; index++){
        let timelineData= {};
        timelineData.id = this.state.originalTimeline[index].id;
        let timeline = await API.graphql(graphqlOperation(mutations.deleteTimeline,
          {input: timelineData}));
        console.log("delele timeline", timeline); 
      }
    }
  }

  handleSubmit = async () => {
    try{
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
          videoURL:this.state.videoURL,
          companyType: this.state.companyType,
          description: this.state.description,
          headquarter: this.state.headquarter,
          size: this.state.size
        }
        let newEmployer = await API.graphql(graphqlOperation(mutations.updateEmployer,
          { input: employerData }));
        console.log("upload new profile", newEmployer);

        //update address if any changed
        if(this.state.isAddressChange){
          let addressData = {
            id: this.state.addressID,
            line1: this.state.addressLine1,
            line2: this.state.addressLine2,
            city:this.state.city,
            postalCode: this.state.postalCode,
            state: this.state.state
          }
          let newAddress = await API.graphql(graphqlOperation(mutations.updateAddress,
            { input: addressData }));
          console.log("upload new address", newAddress);
        }

        //update timelines if any changed
        if(this.state.isTimelineChange)
          this.updateTimeline();    
        this.props.onOk();
        message.success(`Profile Update Successfully`);
    }
    catch(err){
        this.props.onOk();
        message.error(`Profile Update Fail`);
    }
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
    this.setState({ timeline: timelines,isTimelineChange:true });
  }

  //delete one timeline by index
  handleDeleteTimeline = (index) => {
    let timelines = [...this.state.timeline];
    timelines.splice(index, 1);
    this.setState({ timeline: timelines,isTimelineChange:true });
  }

  //update the state when timeline title change
  handleTitleUpdate = (e, index) => {
    let timelines = [...this.state.timeline];
    let changeTimeline = timelines[index];
    changeTimeline.title = e.target.value;
    this.setState({ timeline: timelines });
    this.setState({ timeline: timelines,isTimelineChange:true });
  }

  //update the state when timeline date change
  handleDateUpdate = (dateString, index) => {
    let timelines = [...this.state.timeline];
    let changeTimeline = timelines[index];
    changeTimeline.date = dateString;
    this.setState({ timeline: timelines,isTimelineChange:true });
  }

  //update the state when description change
  handleInfoUpdate = (e,index) => {
    let timelines = [...this.state.timeline];
    let changeTimeline = timelines[index];
    changeTimeline.info = e.target.value;
    this.setState({ timeline: timelines,isTimelineChange:true });
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
        <Form 
          className="login-form">
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
          <FormItem
            {...formItemLayout}
            label="Youtube Video"
          >
            <Input
              value={this.state.videoURL}
              style={{ width: "60%" }}
              name="videoURL"
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
            label="City"
          >
            <Input
              value={this.state.city}
              name="city"
              onChange={(event) => { this.handleUpdate(event) }}
              style={{ width: "60%" }} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="postalCode"
          >
            <Input
              value={this.state.postalCode}
              name="postalCode"
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
                  label={"Event" + " " + (index + 1)}
                >
                  {/* title input */}
                  <Input value={element.title}
                    required
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
                    required
                    value={element.info}
                    style={{ width: "60%" }}
                    rows={3}
                    onChange={(event) => { this.handleInfoUpdate(event, index) }}
                    name="description"
                    placeholder="Description" />
                  <br />

                  {/* datepicker */}
                  <DatePicker
                    required
                    onChange={(date,dateString) => { this.handleDateUpdate(dateString, index) }}
                    defaultValue={moment(element.date, 'YYYY-MM-DD')}
                    placeholder={I18n.get('Event Date')}
                    name="postDate" />
                </FormItem>)
            })}
          <div style={{ textAlign: "center" }} >
            <Button
              onClick ={this.handleAddTimeline}>
              <Icon type="plus" />
              Add More Events
            </Button>
          </div>
        </Form>
      </Modal>
    );
  }
}

export default ModalForm;

