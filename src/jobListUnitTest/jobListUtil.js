export function filterTypeGen (value, old) {
    if(value == "All"){
        delete old["jobType"];
    }else{
        old["jobType"] = {"contains":value};
    }
    return old;
};

export function filterCateGen (value, old) {
    
}

export function filterDateGen (value){
    var moment = require('moment');
    let newSearch = {};
    if(value != "All"){
        let diff = value * 24 * 60 * 60 * 1000; //convert to milliseconds
        let current = new Date();
        let setTime = current - diff;
        let setDate = moment(setTime).format('YYYY-MM-DD');
        newSearch = {"filter":{"datePosted":{"ge":setDate}}};
    }
    return newSearch;
}

export function searchByNameGen (value, searchType, old) {
    
    if (value == "") {
        delete old["searchFieldName"];
        delete old["searchFieldLocation"];
    } else if(searchType == "Name"){
        old["searchFieldName"] = {"contains":value.toLowerCase()};
    } else {
        old["searchFieldLocation"] = {"contains":value.toLowerCase()};
    }
    return old;
}

export function resetGen () {
    return { clickedCounts: { ge: 0 } };
}
