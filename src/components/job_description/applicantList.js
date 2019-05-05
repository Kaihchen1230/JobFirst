import React from 'react';
import { Table, Menu, Form, Button, Divider, Icon, Select } from 'antd';
import * as mutations from '../../graphql/mutations';
const { Column } = Table;


class ApplicantList extends React.Component{


  state = {
    applicants: this.props.applicants,
    visible: false,
    currentEmployeeId: ""
  }

  handleAccpet = (id, e) => {
    console.log('handle accept is click with this id: ', id);

    const currentId = id;
    this.setState({
      currentEmployeeId: currentId
    });
    
  }

  handleReject = (id, e) => {
    console.log('handle accept is click with this id: ', id);

    const currentId = id;
    this.setState({
      currentEmployeeId: currentId
    });
  }

  render(){
    console.log('this is the applicants: ', this.state.applicants);


    console.log('this is the id: ', this.state.currentEmployeeId);

    return(
      
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
              <a onClick = {(e) => this.handleAccpet(record.key, e)
              }>Accpet</a>
              <Divider type="vertical" style={{background: "green"}}/>
              <a onClick = {(e) => this.handleReject(record.key, e) }>Reject</a>
            </span>
          )}
        />
      </Table>
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
