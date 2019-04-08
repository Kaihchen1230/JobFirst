import React from 'react';

const companyDetail = (props) => {
    let companyInfo = [...props.companyInfo];

    let companyInfoPiece = companyInfo.map((item) =>
        <div>
            <h2>OverView</h2>
            <ul>
                <li>Name: {item.name}</li>
                <li>headquarter: {item.headquarter}</li>
                <li>Founded: {item.founded}</li>
                <li>Industry: {item.industry}</li>
                <li>revenue: {item.revenue}</li>
                <li>Size: {item.size}</li>
            </ul>
        </div>
        
    )
    
    console.log(companyInfoPiece);
    
    return(
        <div>
            {companyInfoPiece}
        </div>
    )
}

export default companyDetail;