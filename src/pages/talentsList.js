import React from 'react';
import { generate } from 'randomstring';
import { Layout } from 'antd';
import PersonList from '../components/talent_list/list';

const {
    Header, Footer, Sider, Content,
} = Layout;

class TalentList extends React.Component {
    state = {
        personList: [
            {
                id: generate(10),
                name: 'John Snow',
                degree: 'House of Baratheon',
                cover: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                pic: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
            },
            {
                id: generate(10),
                name: 'Ken Snow',
                degree: 'House of Baratheon',
                cover: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                pic: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
            },
            {
                id: generate(10),
                name: 'Sunny Snow',
                degree: 'House of Baratheon',
                cover: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                pic: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
            },
            {
                id: generate(10),
                name: 'Rainny Snow',
                degree: 'House of Baratheon',
                cover: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                pic: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
            },
            {
                id: generate(10),
                name: 'Stormy Snow',
                degree: 'House of Baratheon',
                cover: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                pic: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
            },
            {
                id: generate(10),
                name: 'Sexy Snow',
                degree: 'House of Baratheon',
                cover: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                pic: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
            }
        ]
    }

    render() {
        return (
            <Layout>
                <Sider>
                    <div> sidebar </div>
                </Sider>
                <Content>
                    <PersonList persons={this.state.personList} />
                </Content>
            </Layout>
        );
    }
}

export default TalentList;