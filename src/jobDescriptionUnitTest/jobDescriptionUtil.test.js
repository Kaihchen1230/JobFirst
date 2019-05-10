const { loadingStatus, visibleStatus, updateJobStatus } = require('./jobDescriptionUtil');
test('loading result should return false', () => {
    const expectResult = false;
    const testingResult = loadingStatus(false);

    expect(testingResult).toBe(expectResult);
});

test('loading result should return true', () => {
    const expectResult = true;
    const testingResult = loadingStatus(true);

    expect(testingResult).toBe(expectResult);
});

test('visible result should return false', () => {
    const expectResult = false;
    const testingResult = visibleStatus(false);

    expect(testingResult).toBe(expectResult);
});

test('visible result return true', () => {
    const expectResult = true;
    const testingResult = visibleStatus(true);

    expect(testingResult).toBe(expectResult);
});

// test('updateJobStatus of a not existed appliedJobId, it should return error', async () => {
//     const expectResult = "error";
//     const testingResult = updateJobStatus('1fdc3714-4b1d-471f-a9dd-ee758bca585f', 'Pending');
//     console.log('this is the result: ', testingResult);
//     expect(testingResult).toBe({});
// });