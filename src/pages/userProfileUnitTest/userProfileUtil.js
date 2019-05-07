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