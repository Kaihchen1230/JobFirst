export default filterTypeGen = (value) => {
    let newSearch = {};
    if(value == "All"){
        return {"filter":{}};
    }else{
        newSearch = {"filter":{"jobType":{"contains":value}}};
        return newSearch;
    }
}

export default filterDateGen = (value) =>{

}

export default searchByNameGen = (value, search) => {
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
