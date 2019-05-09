const { loadingStatus, visibleStatus, updateJobStatus } = require('./jobDescriptionUtil');

test('loading result should return false', () => {
    const expectResult = false;
    const testingResult = loadingStatus(false);

    expect(expectResult).toEqual(testingResult);
});

test('loading result should return true', () => {
    const expectResult = true;
    const testingResult = loadingStatus(true);

    expect(expectResult).toEqual(testingResult);
});

test('visible result should return false', () => {
    const expectResult = false;
    const testingResult = visibleStatus(false);

    expect(expectResult).toEqual(testingResult);
});

test('visible result return true', () => {
    const expectResult = true;
    const testingResult = visibleStatus(true);

    expect(expectResult).toEqual(testingResult);
});

test('updateJobStatus of a not existed appliedJobId, it should return error', () => {
    const expectResult = "error";
    const testingResult = updateJobStatus('1fdc3714-4b1d-471', 'Pending');
    console.log('this is the result: ', testingResult);
    expect(expectResult).toEqual(testingResult);
});