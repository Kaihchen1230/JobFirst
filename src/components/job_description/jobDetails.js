import React from 'react';
import jobDetail from '../../pages/jobDescription';
const jobDetails = (props) => {

    let jobInfo = {...props.jobInfo};

    let jobDuty = jobInfo.requirements.map((item) => 
        <li>{item}</li>
    )
    let jobInfoPiece = (      
    <div>
            <h2>{jobInfo.title}</h2>
            <h3>Description: </h3>
            <p>
                {jobInfo.description}
            </p>
            <h3>Responsibilities: </h3>
            <ul>
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