export function filterTypeGen (value, old) {
    if(value == "All"){
        console.log("All excuted");
        delete old["jobType"];
    }else{
        old["jobType"] = {"contains":value};
    }
    return old;
};

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

export function searchByNameGen (value, search) {
    let newSearch = {};
    if(value == ""){
        
    }else if(search == "Name"){
        newSearch = {"searchFieldName":{"contains":value.toLowerCase()}};
    }else {
        newSearch = {"searchFieldLocation":{"contains":value.toLowerCase()}};
    }
    return newSearch;
}

export function resetGen () {
    return {};
}
