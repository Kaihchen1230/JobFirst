const { filterTypeGen, filterDateGen, searchByNameGen, resetGen, filterCateGen, filterEduGen, filterSalaryGen } = require('./jobListUtil');

test('should give object for filter by job type', () => {
    const obj = filterTypeGen('full time', { clickedCounts: { ge: 0 } });
    expect(obj["jobType"]).toEqual({ "contains": 'full time' });
});

test('should remove jobType in the oject if All is select for the job type filter', () => {
    const obj = filterTypeGen('All', { clickedCounts: { ge: 0 }, jobType: { "contains": 'full time' } });
    expect(obj).toEqual({ clickedCounts: { ge: 0 } });
})

test('should give an object contain the search field by category', () => {
    const obj = filterCateGen('Healthcare', { clickedCounts: { ge: 0 } });
    expect(obj["jobCategory"]).toEqual({ "contains": 'Healthcare' });
})

test('should remove jobCategory in the oject if All is select for the job category filter', () => {
    const obj = filterCateGen('All', { clickedCounts: { ge: 0 }, jobCategory: { "contains": 'Healthcare' } });
    expect(obj).toEqual({ clickedCounts: { ge: 0 } });
})

test('should give an object contain the search field by education', () => {
    const obj = filterEduGen('Bachelor', { clickedCounts: { ge: 0 } });
    expect(obj["education"]).toEqual({ "contains": 'Bachelor' });
})

test('should remove education in the oject if All is select for the job education filter', () => {
    const obj = filterEduGen('All', { clickedCounts: { ge: 0 }, education: { "contains": 'Bachelor' } });
    expect(obj).toEqual({ clickedCounts: { ge: 0 } });
})

test('should give the correct value of date', () => {
    const obj = filterDateGen(10, { clickedCounts: { ge: 0 } });
    let diff = 10 * 24 * 60 * 60 * 1000; //convert to milliseconds
    let current = new Date();
    let setTime = current - diff;
    let contorl = new Date(setTime);
    let check = new Date(obj["datePosted"]["ge"]);
    expect(check.getDate() + 1).toEqual(contorl.getDate())
})

test('should give the correct value of month', () => {
    const obj = filterDateGen(10, { clickedCounts: { ge: 0 } });
    let diff = 10 * 24 * 60 * 60 * 1000; //convert to milliseconds
    let current = new Date();
    let setTime = current - diff;
    let contorl = new Date();
    let check = new Date(obj["datePosted"]["ge"]);
    expect(check.getMonth()).toEqual(contorl.getMonth())
})

test('should give the correct value of year', () => {
    const obj = filterDateGen(10, { clickedCounts: { ge: 0 } });
    let diff = 10 * 24 * 60 * 60 * 1000; //convert to milliseconds
    let current = new Date();
    let setTime = current - diff;
    let contorl = new Date();
    let check = new Date(obj["datePosted"]["ge"]);
    expect(check.getFullYear()).toEqual(contorl.getFullYear())
})

test('should give an object contain the search field by name', () => {
    const obj = searchByNameGen('computer', 'Name', { clickedCounts: { ge: 0 } });
    expect(obj["searchFieldName"]).toEqual({ "contains": 'computer' });
})

test('should remove searchFieldName in the oject if empty string is input for the name search', () => {
    const obj = searchByNameGen("", 'Name', { clickedCounts: { ge: 0 }, searchFieldName: { "contains": 'computer' } });
    expect(obj).toEqual({ clickedCounts: { ge: 0 } });
})

test('should give an object contain the search field by location', () => {
    const obj = searchByNameGen('180', 'Location', { clickedCounts: { ge: 0 } });
    expect(obj["searchFieldLocation"]).toEqual({ "contains": '180' });
})

test('should remove searchFieldLocation in the oject if empty string is input for the location search', () => {
    const obj = searchByNameGen("", 'Location', { clickedCounts: { ge: 0 }, searchFieldLocation: { "contains": '180' } });
    expect(obj).toEqual({ clickedCounts: { ge: 0 } });
})

test('should return an object contian click count filter field equal to 0', () => {
    const obj = resetGen();
    expect(obj["clickedCounts"]["ge"]).toEqual(0);
})

test('should give an object contain the filter field by salary', () => {
    const obj = filterSalaryGen(20, { clickedCounts: { ge: 0 } });
    expect(obj["salary"]["ge"]).toEqual(20);
})