const reverseString = require('./reverseString');

test('Reverse string racecar', () => {
    expect(reverseString('racecar')).toBe('racecar');
});

test('Reverse string pizza', () => {
    expect(reverseString('pizza')).toBe('azzip');
});

test('Reverse string spectacular', () => {
    expect(reverseString('spectacular')).toBe('ralucatceps');
});