import React from 'react';

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
    console.log('1111 ' + jobInfo);
    

    return(
        <div>
            {jobInfoPiece}
        </div>
    )

}

export default jobDetails;