export function filterTypeGen(value, old) {
    if (value == "All") {
        delete old["jobType"];
    } else {
        old["jobType"] = { "contains": value };
    }
    return old;
};

export function filterCateGen(value, old) {
    if (value == "All") {
        delete old["jobCategory"];
    } else {
        old["jobCategory"] = { "contains": value };
    }
    return old;
}

export function filterEduGen(value, old) {
    if (value == "All") {
        delete old["education"];
    } else {
        old["education"] = { "contains": value };
    }
    return old;
}

export function filterDateGen(value, old) {
    var moment = require('moment');
    let diff = value * 24 * 60 * 60 * 1000; //convert to milliseconds
    let current = new Date();
    let setTime = current - diff;
    let setDate = moment(setTime).format('YYYY-MM-DD');
    old["datePosted"] = { "ge": setDate };
    return old;
}

export function filterSalaryGen(value, old) {
    old["salary"] = { "ge": value };
    return old;
}

export function searchByNameGen(value, searchType, old) {

    if (value == "") {
        delete old["searchFieldName"];
        delete old["searchFieldLocation"];
    } else if (searchType == "Name") {
        old["searchFieldName"] = { "contains": value.toLowerCase() };
    } else {
        old["searchFieldLocation"] = { "contains": value.toLowerCase() };
    }
    return old;
}

export function resetGen() {
    return { clickedCounts: { ge: 0 } };
}
