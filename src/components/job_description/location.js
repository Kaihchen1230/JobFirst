import React from 'react';

const location = (props) => {
    let locationInfo = [...props.locationInfo];

    let locationInfoPiece = locationInfo.map((item) => 
        <h3>{item.street1} {item.city} {item.state} {item.zipCode}</h3>
    )

    return(
        <div>
            {locationInfoPiece}
        </div>
    )
}

export default location;