const { formatDate, disabledDate } = require('./jobPostUtil');

test('should give the correct value of date', () => {
    const obj = formatDate();
    let check = new Date();
    let day = check.getDate().toString();
    if (day.length < 2) day = '0' + day;
    expect(obj.slice(8)).toEqual(day)
})

test('should give the correct value of month', () => {
    const obj = formatDate();
    let check = new Date();
    let month = check.getMonth() + 1;
    month = month.toString();
    if (month.length < 2) month = '0' + month;
    expect(obj.slice(5, 7)).toEqual(month)
})

test('should give the correct value of year', () => {
    const obj = formatDate();
    let check = new Date();
    let year = check.getFullYear().toString();
    expect(obj.slice(0, 4)).toEqual(year)
})

test('should return false if the input date is smaller than current', () => {
    const obj = disabledDate("1999-01-01");
    expect(obj).toEqual(false);
})

test('should return true if the input date is greater than current', () => {
    const obj = disabledDate("2099-01-01");
    expect(obj).toEqual(false);
})