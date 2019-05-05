import React from 'react';
import { Table, Modal, Divider} from 'antd';
import * as mutations from '../../graphql/mutations';
import PopOutWindow from './popOutWindow';
import { async } from 'q';
import { API, graphqlOperation } from 'aws-amplify';
import { navigate } from 'gatsby';
const { Column } = Table;


class ApplicantList extends React.Component{


  state = {
    applicants: this.props.applicants,
    visible: false,
    employeeName: "",
    currentAppliedJobId: "",
    status: ""
  }

  handleAccpet = async (id, name, e) => {
    console.log('handle accept is click with this id: ', id);

    const currentId = id;
    const currentName = name;
    this.setState({
      currentAppliedJobId: currentId,
      employeeName: currentName,
      visible: true
    })

    // update the employee's job status to accept
    try{
      const updateAppliedJobInput = {
        id: currentId,
        status: "Accept"
      }
      const updatedAppliedJob = await API.graphql(graphqlOperation(mutations.updateAppliedJob, {input: updateAppliedJobInput}));
      console.log('this is the updatedAppliedJob: ', updatedAppliedJob);

    }catch(err){
      console.log('there is an error to change the status of the employee: ', err);
    }
  }

  handlePending = async (id, name, e) => {
    console.log('handle accept is click with this id: ', id);

    const currentId = id;
    const currentName = name;
    this.setState({
      currentAppliedJobId: currentId,
      employeeName: currentName,
      visible: true
    });

    // update the employee's job status to pending
    try{
      const updateAppliedJobInput = {
        id: currentId,
        status: "Pending"
      }
      const updatedAppliedJob = await API.graphql(graphqlOperation(mutations.updateAppliedJob, {input: updateAppliedJobInput}));
      console.log('this is the updatedAppliedJob: ', updatedAppliedJob);

    }catch(err){
      console.log('there is an error to change the status of the employee: ', err);
    }
  }


  handleReject = async (id, name, e) => {
    console.log('handle accept is click with this id: ', id);

    const currentId = id;
    const currentName = name;
    this.setState({
      currentAppliedJobId: currentId,
      employeeName: currentName,
      visible: true
    });

    // update the employee's job status to reject
    try{
      const updateAppliedJobInput = {
        id: currentId,
        status: "Reject"
      }
      const updatedAppliedJob = await API.graphql(graphqlOperation(mutations.updateAppliedJob, {input: updateAppliedJobInput}));
      console.log('this is the updatedAppliedJob: ', updatedAppliedJob);

    }catch(err){
      console.log('there is an error to change the status of the employee: ', err);
    }
  }

  render(){
    console.log('this is the applicants: ', this.state.applicants);


    console.log('this is the id: ', this.state.currentEmployeeId);

    return(
      <div>
        <Table dataSource={this.state.applicants}>
            <Column
              title="Name"
              dataIndex="name"
              key="name"
            />
          <Column
            title="Age"
            dataIndex="age"
            key="age"
          />
          <Column
            title="Address"
            dataIndex="address"
            key="address"
          />

          <Column
            style = {{marginTop: "15px"}}
            title="Status"
            key={"status" + Math.random()} 
            dataIndex = "status"
          />
          <Column
            style = {{marginTop: "15px"}}
            title ="Actions"
            render = {(text, record) => (
              <span>
                <a onClick = {(e) => this.handleAccpet(record.appliedJobId, record.name, e)
                }>Accpet</a>
                <Divider type="vertical" style={{background: "green"}}/>
                <a onClick = {(e) => this.handlePending(record.appliedJobId, record.name, e) }>Pending</a>
                <Divider type="vertical" style={{background: "green"}}/>
                <a onClick = {(e) => this.handleReject(record.appliedJobId, record.name, e) }>Reject</a>
              </span>
            )}
          />
        </Table>
        <Modal 
          
          visible={this.state.visible}
          onOk = {() => {
            this.setState({
              visible: false
            })
            
            window.location.reload(); 
          }}
        >
          <p>
            Update {this.state.employeeName}'s status successfully
          </p>
        </Modal>
      </div>
      
    )
  }
}
    

export default ApplicantList;

{/* <Column
title="Tags"
dataIndex="tags"
key="tags"
render={tags => (
  <span>
    {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
  </span>
)}
/>
<Column
title="Action"
key="action"
render={(text, record) => (
  <span>
      {/* we can send out an email here to inform the user for interview or reject */}
//     <a href="javascript:;">Invite {record.lastName}</a>
//     <Divider type="vertical" />
//     <a href="javascript:;">Reject</a>
//   </span>
// )}
// />
{/* <span>
              <Button onClick={this.inviteHandler}>Invite for interview</Button>
              <Divider type="vertical" style={{background: "green"}}/>
              <Button onClick={this.rejectHandler}>Reject</Button>
            </span> */}
