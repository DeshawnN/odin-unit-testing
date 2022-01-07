const calculator = require('./calculator');

test('Calculator object exists', () => {
    expect(calculator).toBeDefined();
});

test('Calculator has add method', () => {
    expect(calculator.add).toBeDefined();
});

test('Add Test: 2 + 2 is 4', () => {
    expect(calculator.add(2,2)).toBe(4);
});

test('Add Test: 2 + 4 is 6', () => {
    expect(calculator.add(2,4)).toBe(6);
});

test('Add Test: 4 + 4 is 8', () => {
    expect(calculator.add(4,4)).toBe(8);
});

test('Calculator has subtract method', () => {
    expect(calculator.subtract).toBeDefined();
});

test('Subtract Test: 2 - 2 is 0', () => {
    expect(calculator.subtract(2,2)).toBe(0);
});

test('Subtract Test: 1 - 2 is -1', () => {
    expect(calculator.subtract(1,2)).toBe(-1);
});

test('Subtract Test: 10 - 8 is 2', () => {
    expect(calculator.subtract(10,8)).toBe(2);
});

test('Calculator has multiply method', () => {
    expect(calculator.multiply).toBeDefined();
});

test('Multiply Test: 1 * 1 is 1', () => {
    expect(calculator.multiply(1,1)).toBe(1);
});

test('Multiply Test: 2 * 2 is 4', () => {
    expect(calculator.multiply(2,2)).toBe(4);
});

test('Multiply Test: 3 * 3 is 9', () => {
    expect(calculator.multiply(3,3)).toBe(9);
});

test('Calculator has divide method', () => {
    expect(calculator.divide).toBeDefined();
});

test('Divide Test: 9 / 3 is 3', () => {
    expect(calculator.divide(9,3)).toBe(3);
});

test('Divide Test: 2 / 2 is 1', () => {
    expect(calculator.divide(2,2)).toBe(1);
});

test('Divide Test: 10 / 1 is 10', () => {
    expect(calculator.divide(10,1)).toBe(10);
});