import { Avatar } from 'antd';
import React from 'react';
import { Icon } from 'antd';


let Style = {
    padddingLeft:"0px",
    position:"relative",
    left:"5%",
    fontSize:"1.2em",
    letterSpacing: "1px",
    lineHeight:"1.8em",
    border:"solid 1px"
};

const briefInfo = (props) => {
    console.log("props, ",props);
    return (
            <div style={Style}  >
                <h2>Brief Info</h2> 
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
    )
}
export default briefInfo;

