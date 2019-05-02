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

}

exports.selectSearchGen = (value) => {
    return {"search": value};
}
exports.searchByNameGen = (value) => {
    let newSearch = {};
    if(value == ""){
        return {"filter":{}};
    }else if(this.state["search"] == "Name"){
        newSearch = {"filter":{"searchFieldName":{"contains":value.toLowerCase()}}};
        return newSearch;
    }else {
        newSearch = {"filter":{"searchFieldLocation":{"contains":value.toLowerCase()}}};
        return newSearch;
    }
}

exports.resetGen = () => {
    return {"filter":{}};
}
