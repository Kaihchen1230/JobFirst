import { Avatar } from 'antd';
import React from 'react';
import { Icon } from 'antd';
import { I18n } from 'aws-amplify';

let mainStyle = {
    padddingLeft:"0px",
    position:"relative",
    left:"5%",
    marginTop:"3%",
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
                    <Icon type="home" theme="twoTone" style={{ fontSize: '20px' }}  /> Headquarter:{props.headquarter}
                    <br/>    
                    <Icon type="pie-chart" theme="twoTone" style={{ fontSize: '20px' }}  /> Size:{props.size}
                    <br/>   
                    <Icon type="fund" theme="twoTone" style={{ fontSize: '20px' }} /> Revenue:{props.revenue}
                    <br/>
                    <Icon type="cloud" theme="twoTone"  style={{ fontSize: '20px' }} /> Website:{props.companyWebsite}
                    <br/>    
                    <Icon type="plus-circle" theme="twoTone"  style={{ fontSize: '20px' }}/> Open Jobs:{props.jobAmount}
                </div>
            </div>
    )
}
export default briefInfo;

