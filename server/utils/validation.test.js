const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    const value = 6;
    const result = isRealString(value);
    expect(result).toBe(false);
  });

  it('should reject string with only spaces', () => {
    const value = '     ';
    const result = isRealString(value);
    expect(result).toBe(false);
  });

  it('should all string with non-space characters', () => {
    const value = '  Andrew  ';
    const result = isRealString(value);
    expect(result).toBe(true);
  });
});
