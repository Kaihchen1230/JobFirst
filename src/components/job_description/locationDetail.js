import React from 'react';

const location = (props) => {
    let locationInfo = {...props.locationInfo};

    let locationInfoPiece = ( 
        <h3>{locationInfo.line1} {locationInfo.line2} {locationInfo.city} {locationInfo.state} {locationInfo.postalCode}</h3>
    )

    return(
        <div>
            {locationInfoPiece}
        </div>
    )
}

export default location;