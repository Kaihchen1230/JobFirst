exports.filterTypeGen = (value) => {
    let newSearch = {};
    if(value == "All"){
        return {"filter":{}};
    }else{
        newSearch = {"filter":{"jobType":{"contains":value}}};
        return newSearch;
    }
}

exports.filterDateGen = (value) =>{
    let newSearch = {};
    if(value != "All"){
        let diff = value * 24 * 60 * 60 * 1000; //convert to milliseconds
        let current = new Date();
        let setTime = current - diff;
        setTime = new Date(setTime);
        let Year = setTime.getFullYear();
        let Month = setTime.getMonth() + 1;
        let Day = setTime.getDate();
        let setDay = Year + "-" + Month + "-" + Day;
        newSearch = {"filter":{"datePosted":{"ge":setDay}}}
    }
    return newSearch;
}

exports.searchByNameGen = (value, search) => {
    let newSearch = {};
    if(value == ""){
        return {};
    }else if(search == "Name"){
        newSearch = {"filter":{"searchFieldName":{"contains":value.toLowerCase()}}};
        return newSearch;
    }else {
        newSearch = {"filter":{"searchFieldLocation":{"contains":value.toLowerCase()}}};
        return newSearch;
    }
}

exports.resetGen = () => {
    return {};
}
