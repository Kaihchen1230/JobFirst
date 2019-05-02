const { filterTypeGen, filterDateGen, searchByNameGen, resetGen,  } = require('./jobListUtil');

test('should give object for filter by job type', () => {
    const text = filterTypeGen('full time');
    expect(text).toBe({"filter":{"jobType":{"contains":'full time'}}})
});

test('should give object for search by title', () => {
    const text = searchByNameGen('computer', 'Name');
    expect(text).toBe({"filter":{"searchFieldName":{"contains":'computer'}}})
})

test('should give object for search by location', () => {
    const text = searchByNameGen('180', 'Location');
    expect(text).toBe({"filter":{"searchFieldLocation":{"contains":'180'}}})
})