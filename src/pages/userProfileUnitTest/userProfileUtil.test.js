const { checkKeySchoolName, checkKeyDegree, checkKeyCity, checkKeyCountry, checkKeyCompanyName, checkKeyReasonToLeave, checkKeyStartYear, checkKeyEndYear } = require('./userProfileUtil');

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

test('should check for companyName key', () => {
    const testObj = {
        companyName: '12345',
    }
    const obj = checkKeyCompanyName(testObj);
    expect(obj).toEqual(true);
});

test('should check for reasonToLeave key', () => {
    const testObj = {
        reasonToLeave: '12345',
    }
    const obj = checkKeyReasonToLeave(testObj);
    expect(obj).toEqual(true);
});

test('should check for startYear key', () => {
    const testObj = {
        startYear: '12345',
    }
    const obj = checkKeyStartYear(testObj);
    expect(obj).toEqual(true);
});

test('should check for endYear key', () => {
    const testObj = {
        endYear: '12345',
    }
    const obj = checkKeyEndYear(testObj);
    expect(obj).toEqual(true);
});