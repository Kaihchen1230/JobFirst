const { filterTypeGen, filterDateGen, searchByNameGen, resetGen, } = require('./jobListUtil');
var moment = require('moment');

test('should give object for filter by job type', () => {
    const obj = filterTypeGen('full time');
    expect(obj).toEqual({ "filter": { "jobType": { "contains": 'full time' } } });
});

test('should give the date by minus current date to give value', () => {
    const obj = filterDateGen(10);
    let diff = 10 * 24 * 60 * 60 * 1000; //convert to milliseconds
    let current = new Date();
    let setTime = current - diff;
    let setDate = moment(setTime).format('YYYY-MM-DD');
    expect(obj).toEqual({"filter": { "datePosted": { "ge": setDate } }})
})

test('should give object for search by title', () => {
    const obj = searchByNameGen('computer', 'Name');
    expect(obj).toEqual({ "filter": { "searchFieldName": { "contains": 'computer' } } });
});

test('should give object for search by location', () => {
    const obj = searchByNameGen('180', 'Location');
    expect(obj).toEqual({ "filter": { "searchFieldLocation": { "contains": '180' } } });
});

test('should return an empty object', () => {
    const obj = resetGen();
    expect(obj).toEqual({});
});