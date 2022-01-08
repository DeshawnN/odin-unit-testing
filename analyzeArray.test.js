const analyzeArray = require('./analyzeArray');

test('Analyzes array and produces desired object', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

test('Analyzes array and produces desired object', () => {
    expect(analyzeArray([2,2])).toEqual({
        average: 2,
        min: 2,
        max: 2,
        length: 2
    });
});

test('Analyzes array and produces desired object', () => {
    expect(analyzeArray([10, 20, 30])).toEqual({
        average: 20,
        min: 10,
        max: 30,
        length: 3
    });
});