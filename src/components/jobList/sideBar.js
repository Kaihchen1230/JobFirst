import React from 'react';
import { generate } from 'randomstring';
import { Card, Col, Row, Button, Input, Tabs, Layout, Menu } from 'antd';

const sideBar = (props) => {
    return (
        <div>
            <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                enterButton
            />
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
            >
                <Menu.Item key='1'>15 days</Menu.Item>
                <Menu.Item key='2'>One month</Menu.Item>
                <Menu.Item key='3'>Three month</Menu.Item>
                <Menu.Item key='4'>All</Menu.Item>
            </Menu>
        </div>

    );
}