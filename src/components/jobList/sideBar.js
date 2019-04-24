import React from 'react';
import { Input, Icon, Menu } from 'antd';
import dict from "../dictionary/dictionary"
import { I18n } from 'aws-amplify'


const SubMenu = Menu.SubMenu;
const Person = (props) => {
    const Search = Input.Search;
    let lan = window.localStorage.getItem('lan');
    I18n.putVocabularies(dict);
    I18n.setLanguage(lan);
    return (
        <div>
            <Search
                placeholder={I18n.get('Search')}
                onSearch={value => console.log(value)}
                enterButton
            />
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['1']}
            >
                <SubMenu key="sub1" title={<span><Icon type="calendar" /><span>Post Day</span></span>}>
                    <Menu.Item key='1'>{I18n.get('15 Days')}</Menu.Item>
                    <Menu.Item key='2'>{I18n.get('One Month')}</Menu.Item>
                    <Menu.Item key='3'>{I18n.get('Three Months')}</Menu.Item>
                    <Menu.Item key='4'>{I18n.get('All')}</Menu.Item>
                </SubMenu>
            </Menu>
        </div>

    );
}

export default Person;