import React from 'react';
import {  Table, Input, Button, Icon, } from 'antd';
import Highlighter from 'react-highlight-words';


const data = [{
    key: '1',
    name: 'John Brown',
    degree: "Associal degree in computer science",
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Joe Black',
    degree: "Associal degree in computer science",
    address: 'London No. 2 Lake Park',
  }, {
    key: '3',
    name: 'Jim Green',
    degree: "Associal degree in computer information system",
    address: 'Sidney No. 3 Lake Park',
  }, {
    key: '4',
    name: 'Jim Red',
    degree: "Associal degree in computer information system",
    address: 'London No. 4 Lake Park',
  },
  {
    key: '1',
    name: 'John Brown',
    degree: "Associal degree in computer information system",
    address: 'New York No. 5 Lake Park',
  }, {
    key: '2',
    name: 'Joe Black',
    degree: "Associal degree in computer information system",
    address: 'London No. 6 Lake Park',
  }, {
    key: '3',
    name: 'Jim Green',
    degree: "Associal degree in computer information system",
    address: 'Sidney No. 7 Lake Park',
  }, {
    key: '4',
    name: 'Jim Red',
    degree: "Associal degree in computer information system",
    address: 'London No. 8 Lake Park',
  },
  {
    key: '1',
    name: 'John Brown',
    degree: "Associal degree in computer information system",
    address: 'New York No. 9 Lake Park',
  }, {
    key: '2',
    name: 'Joe Black',
    degree: "Associal degree in math education",
    address: 'London No. 10 Lake Park',
  }, {
    key: '3',
    name: 'Jim Green',
    degree: "Associal degree in math",
    address: 'Sidney No. 11 Lake Park',
  }, {
    key: '4',
    name: 'Jim Red',
    degree: "Associal degree in computer information system",
    address: 'London No. 12 Lake Park',
  }
];

  
  class applicantList extends React.Component {
    state = {
      searchText: '',
    };
  
    getColumnSearchProps = (dataIndex) => ({
      filterDropdown: ({
        setSelectedKeys, selectedKeys, confirm, clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={node => { this.searchInput = node; }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm)}
            icon="search"
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </div>
      ),
      filterIcon: filtered => <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />,
      onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => this.searchInput.select());
        }
      },
      render: (text) => (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ),
    })
  
    handleSearch = (selectedKeys, confirm) => {
      confirm();
      this.setState({ searchText: selectedKeys[0] });
    }
  
    handleReset = (clearFilters) => {
      clearFilters();
      this.setState({ searchText: '' });
    }
  
    render() {
      const columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: '30%',
        ...this.getColumnSearchProps('name'),
      }, {
        title: 'Degree',
        dataIndex: 'degree',
        key: 'degree',
        width: '20%',
        ...this.getColumnSearchProps('degree'),
      }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        ...this.getColumnSearchProps('address'),
      }];
      return <Table columns={columns} dataSource={data} />;
    }
  }
  

export default applicantList;