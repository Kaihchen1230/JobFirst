exports.filterTypeGen = (value) => {
    let newSearch = {};
    if(value == "All"){
        return {};
    }else{
        newSearch = {"filter":{"jobType":{"contains":value}}};
        return newSearch;
    }
}

exports.filterDateGen = (value) =>{
    if(value == "All"){
        return {};
    }
    let timeDifference = (value * 60 * 60 * 24 * 1000);
    let currentTime = new Date();
    let setDate = currentTime.getTime() - timeDifference;
    setDate = new Date(setDate);
    let setYear = setDate.getFullYear();
    let setMonth = setDate.getMonth() + 1;
    let setDay = setDate.getDate();
    let result = {"filter":{"datePosted":{"ge": setYear + "-" + setMonth + "-" + setDay}}};
    return result;
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
