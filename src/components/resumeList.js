import React from 'react';
import { List } from 'antd';

const MyList = (props) => {

    const data = [
        'Education: 清华大学',
        'Highest Degree Obtain: Phd 数学博士学位',
        'Certificates: ',
        'Skills: ',
        'What else: '
    ];
    return (
        <div>
            <h3 style={{ margin: '16px 0' }}>Large Size</h3>
            <List
                size="large"
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={item => (<List.Item>{item}</List.Item>)}
            />
        </div>
    )
}

export default MyList;