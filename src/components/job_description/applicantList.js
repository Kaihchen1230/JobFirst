import React from 'react';
// import {  Table, Input, Button, Icon, } from 'antd';
// import Highlighter from 'react-highlight-words';


//   class applicantList extends React.Component {
//       constructor(props){
//         super(props);
//         this.state = {
//             searchText: '',
//             applicant: props.applicant
//           };
//       }

    
//     getColumnSearchProps = (dataIndex) => ({
//       filterDropdown: ({
//         setSelectedKeys, selectedKeys, confirm, clearFilters,
//       }) => (
//         <div style={{ padding: 8 }}>
//           <Input
//             ref={node => { this.searchInput = node; }}
//             placeholder={`Search ${dataIndex}`}
//             value={selectedKeys[0]}
//             onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
//             onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
//             style={{ width: 90, marginBottom: 8, display: 'block' }}
//           />
//           <Button
//             type="primary"
//             onClick={() => this.handleSearch(selectedKeys, confirm)}
//             icon="search"
//             size="small"
//             style={{ width: 90, marginRight: 8 }}
//           >
//             Search
//           </Button>
//           <Button
//             onClick={() => this.handleReset(clearFilters)}
//             size="small"
//             style={{ width: 90 }}
//           >
//             Reset
//           </Button>
//         </div>
//       ),
//       filterIcon: filtered => <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />,
//       onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
//       onFilterDropdownVisibleChange: (visible) => {
//         if (visible) {
//           setTimeout(() => this.searchInput.select());
//         }
//       },
//       render: (text) => (
//         <Highlighter
//           highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
//           searchWords={[this.state.searchText]}
//           autoEscape
//           textToHighlight={text.toString()}
//         />
//       ),
//     })
  
//     handleSearch = (selectedKeys, confirm) => {
//       confirm();
//       this.setState({ searchText: selectedKeys[0] });
//     }
  
//     handleReset = (clearFilters) => {
//       clearFilters();
//       this.setState({ searchText: '' });
//     }
  
//     render() {
        
//       const columns = [{
//         title: 'Name',
//         dataIndex: 'name',
//         key: 'name',
//         width: '20%',
//         ...this.getColumnSearchProps('name'),
//       }, {
//         title: 'Degree',
//         dataIndex: 'degree',
//         key: 'degree',
//         width: '20%',



//         ...this.getColumnSearchProps('degree'),
//       }, {
//         title: 'Address',
//         dataIndex: 'address',
//         key: 'address',
//         width: '20%',
//         ...this.getColumnSearchProps('address'),
//       }];
//       return <Table columns={columns} dataSource={this.state.applicant} />;
//     }
//   }
// export default applicantList;




import { Table, Divider, Tag } from 'antd';

const { Column, ColumnGroup } = Table;

const data = [{
  key: '1',
  firstName: 'John',
  lastName: 'Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  firstName: 'Jim',
  lastName: 'Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];
let  applicantList = ()=>{
    return(
  <Table dataSource={data}>
      <Column
        title="Name"
        dataIndex="lastName"
        key="lastName"
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
          <a href="javascript:;">Invite {record.lastName}</a>
          <Divider type="vertical" />
          <a href="javascript:;">Reject</a>
        </span>
      )}
    />
  </Table>
)};

export default applicantList;