const { checkKeySchoolName, checkKeyDegree, checkKeyCity, checkKeyCountry } = require('./userProfileUtil');

test('should check for schoolName key', () => {
    const testObj = {
        schoolName: '12345',
    }
    const obj = checkKeySchoolName(testObj);
    expect(obj).toEqual(true);
});

test('should check for degree key', () => {
    const testObj = {
        degree: '12345',
    }
    const obj = checkKeyDegree(testObj);
    expect(obj).toEqual(true);
});

test('should check for city key', () => {
    const testObj = {
        city: '12345',
    }
    const obj = checkKeyCity(testObj);
    expect(obj).toEqual(true);
});

test('should check for country key', () => {
    const testObj = {
        country: '12345',
    }
    const obj = checkKeyCountry(testObj);
    expect(obj).toEqual(true);
});