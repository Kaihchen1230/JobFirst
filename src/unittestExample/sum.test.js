const sum = require('./sum');

describe("example test",()=>{
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  
  test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(4);
    });
})

