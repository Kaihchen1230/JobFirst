const { filterTypeGen, filterDateGen, selectSearchGen, searchByNameGen, resetGen,  } = require('./jobListUtil');

test('should give object for filter by job type', () => {
    const text = filterTypeGen('full time');
    expect(text).toBe({"filter":{"jobType":{"contains":'full time'}}})
});

