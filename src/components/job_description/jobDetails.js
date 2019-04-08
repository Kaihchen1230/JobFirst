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
    

    return(
        <div>
            {jobInfoPiece}
        </div>
    )

}

export default jobDetails;

{/* <h2>{this.state.jobDetail.title}, New York</h2>
<h3>Description: 
    <p> 
        {this.state.jobDetail.description}
    </p>
</h3>
<h3>
    Responsibilities:
    <ul>
       {listItems}
    </ul>
</h3> */}