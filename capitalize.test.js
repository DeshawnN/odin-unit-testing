const capitalize = require('./capitalize');

test('Capitalize the word pizza', () => {
    expect(capitalize('pizza')).toBe('Pizza');
});

test('Capitalize the word pepperoni', () => {
    expect(capitalize('pepperoni')).toBe('Pepperoni');
});

test('Capitalize the word mozzarella', () => {
    expect(capitalize('mozzarella')).toBe('Mozzarella');
})