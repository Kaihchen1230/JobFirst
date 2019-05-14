import React from 'react';
import jobDetail from '../../pages/jobDescription';
const jobDetails = (props) => {

    let jobInfo = {...props.jobInfo};

    let jobDuty = jobInfo.requirements.map((item) => 
        <li>{item}</li>
    )
    let jobInfoPiece = (      
    <div style = {{width:"90%"}}>
            <h2>{jobInfo.title}</h2>
            <h3>Description: </h3>
            <p style={{fontSize:"1.2em"}}>
                {jobInfo.description}
            </p>
            <h3>Responsibilities: </h3>
            <ul style={{fontSize:"1.2em"}}>
                {jobDuty}
            </ul>
        </div>
    )

    return(
        <div>
            {jobInfoPiece}
        </div>
    )

}

export default jobDetails;