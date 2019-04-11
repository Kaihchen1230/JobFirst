import React from 'react';
import jobDetail from '../../pages/jobDescription';
const jobDetails = (props) => {

    let jobInfo = [...props.jobInfo];

    let jobDuty = jobInfo[0].responsibilities.map((item) => 
        <li>{item}</li>
    )
    let jobInfoPiece = jobInfo.map((item) => 
        <div>
            <h2>{item.title}, {item.location}</h2>
            <h3>Description: </h3>
            <p>
                {item.description}
            </p>
            <h3>Responsibilities: </h3>
            <ul>
                {jobDuty}
            </ul>
        </div>
    )
    console.log({jobDetail});
    

    return(
        <div>
            {jobInfoPiece}
        </div>
    )

}

export default jobDetails;