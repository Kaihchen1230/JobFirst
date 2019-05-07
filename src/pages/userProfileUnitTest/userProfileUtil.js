exports.checkKeySchoolName = (value) => {
    if (value.hasOwnProperty('schoolName')) {
        return true;
    }
    else {
        return false;
    }
}

exports.checkKeyDegree = (value) => {
    if (value.hasOwnProperty('degree')) {
        return true;
    }
    else {
        return false;
    }
}

exports.checkKeyCity = (value) => {
    if (value.hasOwnProperty('city')) {
        return true;
    }
    else {
        return false;
    }
}

exports.checkKeyCountry = (value) => {
    if (value.hasOwnProperty('country')) {
        return true;
    }
    else {
        return false;
    }
}

exports.checkKeyCompanyName = (value) => {
    if (value.hasOwnProperty('companyName')) {
        return true;
    }
    else {
        return false;
    }
}

exports.checkKeyReasonToLeave = (value) => {
    if (value.hasOwnProperty('reasonToLeave')) {
        return true;
    }
    else {
        return false;
    }
}

exports.checkKeyStartYear = (value) => {
    if (value.hasOwnProperty('startYear')) {
        return true;
    }
    else {
        return false;
    }
}

exports.checkKeyEndYear = (value) => {
    if (value.hasOwnProperty('endYear')) {
        return true;
    }
    else {
        return false;
    }
}