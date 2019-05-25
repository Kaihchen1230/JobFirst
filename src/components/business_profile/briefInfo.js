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
    border:"1px solid #a0a6af",
    width:"30%",
    borderRadius: "10px",
};
let infoStyle = {
    padding:"8%",

}

const briefInfo = (props) => {
    return (
            <div style={mainStyle}  >
                <div style={infoStyle}>
                    <h2>{I18n.get('Brief Info')}</h2> 
                    <span>{props.companyType}</span>
                    <br/>
                    <Icon type="home" style={{ fontSize: '20px', color: '#1BB28B'}}  /> {I18n.get('Headquarters')}:<span>{props.headquarter}</span>
                    <br/>    
                    <Icon type="pie-chart" style={{ fontSize: '20px', color: '#1BB28B' }}  /> {I18n.get('Size')}:{props.size}
                    <br/>   
                    <Icon type="fund"  style={{ fontSize: '20px', color: '#1BB28B' }} /> {I18n.get('Revenue')}:{props.revenue}
                    <br/>
                    <Icon type="cloud"   style={{ fontSize: '20px', color: '#1BB28B' }} /> {I18n.get('Website')}:{props.companyWebsite}
                    <br/>    
                    <Icon type="plus-circle"  style={{ fontSize: '20px', color: '#1BB28B' }}/> {I18n.get('Open Jobs')}:{props.jobAmount}
                </div>
            </div>
    )
}
export default briefInfo;

