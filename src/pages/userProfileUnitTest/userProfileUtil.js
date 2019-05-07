exports.checkKeySchoolName = (value) => {
    return value.hasOwnProperty('schoolName') ? true : false;
}

exports.checkKeyDegree = (value) => {
    return value.hasOwnProperty('degree') ? true : false;
}

exports.checkKeyCity = (value) => {
    return value.hasOwnProperty('city') ? true : false;
}

exports.checkKeyCountry = (value) => {
    return value.hasOwnProperty('country') ? true : false;
}

exports.checkKeyCompanyName = (value) => {
    return value.hasOwnProperty('companyName') ? true : false;
}

exports.checkKeyReasonToLeave = (value) => {
    return value.hasOwnProperty('reasonToLeave') ? true : false;
}

exports.checkKeyStartYear = (value) => {
    return value.hasOwnProperty('startYear') ? true : false;
}

exports.checkKeyEndYear = (value) => {
    return value.hasOwnProperty('endYear') ? true : false;
}