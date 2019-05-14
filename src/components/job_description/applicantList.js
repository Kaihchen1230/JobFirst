import React from 'react';
import { Table, Modal, Divider} from 'antd';
import { Link } from 'gatsby';
<<<<<<< HEAD
import { I18n } from 'aws-amplify';
import * as Util from '../../jobDescriptionUnitTest/jobDescriptionUtil';
=======
import * as Util from '../../test/jobDescriptionUnitTest/jobDescriptionUtil';
>>>>>>> d8ed79b8ad75474b931111dd16833cc21324c2ec
const { Column } = Table;


class ApplicantList extends React.Component{


  state = {
    applicants: this.props.applicants,
    visible: false,
    employeeName: "",
    currentAppliedJobId: "",
    status: ""
  }

  handleAccept = async (id, name, e) => {
    console.log('handle accept is click with this id: ', id);

    const currentId = id;
    const currentName = name;
    this.setState({
      currentAppliedJobId: currentId,
      employeeName: currentName,
      visible: true
    })

    const result = Util.updateJobStatus(currentId, "Accept");
    console.log('this is the result: ', result);

  }

  handlePending = async (id, name, e) => {
    console.log('handle pending is click with this id in handle pending: ', id);

    const currentId = id;
    const currentName = name;
    this.setState({
      currentAppliedJobId: currentId,
      employeeName: currentName,
      visible: true
    });

    // update the employee's job status to pending
    const result = Util.updateJobStatus(currentId, "Pending");
    console.log('this is the result: ', result);
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
    const result = Util.updateJobStatus(currentId, "Reject");
    console.log('this is the result: ', result);
  }

  render(){
    console.log('this is the applicants: ', this.state.applicants);


    console.log('this is the id: ', this.state.currentEmployeeId);

    return(
      <div>
        <Table dataSource={this.state.applicants}>
            <Column
              title={I18n.get('Name')}
              key="name"
              render = {(text, record) => (
                <Link to={"/app/user-profile/"+record.key}> 
                  {record.name}
                </Link>
              )}
            />
          <Column
            title={I18n.get("English Level")}
            dataIndex="englishLevel"
            key="englishLevel"
          />
          <Column
            title={I18n.get("Address")}
            dataIndex="address"
            key="address"
          />

          <Column
            style = {{marginTop: "15px"}}
            title={I18n.get("Status")}
            key={"status" + Math.random()} 
            dataIndex = "status"
          />
          <Column
            style = {{marginTop: "15px"}}
            title ={I18n.get("Decision")}
            render = {(text, record) => (
              <span>
                <a onClick = {(e) => this.handleAccept(record.appliedJobId, record.name, e)
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
