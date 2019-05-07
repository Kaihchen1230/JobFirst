const { checkKeySchoolName, checkKeyDegree, checkKeyCity, checkKeyCountry } = require('./userProfileUtil');

test('should give object for filter by job type', () => {
    const obj = filterTypeGen('full time');
    expect(obj).toEqual({ "filter": { "jobType": { "contains": 'full time' } } });
});
