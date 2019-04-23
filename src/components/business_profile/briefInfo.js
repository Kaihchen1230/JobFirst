import { Avatar } from 'antd';
import React from 'react';
import { Icon } from 'antd';
import { I18n } from 'aws-amplify';

let mainStyle = {
    padddingLeft:"0px",
    position:"relative",
    left:"5%",
    fontSize:"1.2em",
    letterSpacing: "1px",
    lineHeight:"1.8em",
    border:"solid 1px",
    width:"30%",
};
let infoStyle = {
    padding:"8%"
}

const briefInfo = (props) => {
    return (
            <div style={mainStyle}  >
                <div style={infoStyle}>
                    <h2>{I18n.get('Brief Info')}</h2> 
                    {props.companyType}
                    <br/>
                    <Icon type="home" style={{ fontSize: '20px' }}  theme="filled" /> Headquarter:{props.headquarter}
                    <br/>    
                    <Icon type="pie-chart" style={{ fontSize: '20px' }} theme="filled" /> Size:{props.size}
                    <br/>   
                    <Icon type="fund" style={{ fontSize: '20px' }} theme="filled" /> Revenue:{props.revenue}
                    <br/>
                    <Icon type="cloud" style={{ fontSize: '20px' }} theme="filled" /> Website:{props.companyWebsite}
                    <br/>    
                    <Icon type="cloud" style={{ fontSize: '20px' }} theme="filled" /> Open Jobs:{props.jobAmount}
                </div>
            </div>
    )
}
export default briefInfo;

