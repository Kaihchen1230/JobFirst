// const { filterTypeGen, filterDateGen, searchByNameGen, resetGen, } = require('./jobListUtil');

// test('should give object for filter by job type', () => {
//     const obj = filterTypeGen('full time');
//     expect(obj).toEqual({ "filter": { "jobType": { "contains": 'full time' } } });
// });

// test('should give object for search by title', () => {
//     const obj = searchByNameGen('computer', 'Name');
//     expect(obj).toEqual({ "filter": { "searchFieldName": { "contains": 'computer' } } });
// });

// test('should give object for search by location', () => {
//     const obj = searchByNameGen('180', 'Location');
//     expect(obj).toEqual({ "filter": { "searchFieldLocation": { "contains": '180' } } });
// });

// test('should return an empty object', () => {
//     const obj = resetGen();
//     expect(obj).toEqual({});
// });