const caesarCipher = require('./caesarCipher');

test('Shifts letter a by 1 to be', () => {
    expect(caesarCipher('a', 1)).toBe('b');
});

test('Shifts letter z by 1 to be a', () => {
    expect(caesarCipher('z', 1)).toBe('a');
})

test('Shifts letter z by 2 to be b', () => {
    expect(caesarCipher('z', 2)).toBe('b');
})

test('Shifts plainstring by 1', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe('bcdefghijklmnopqrstuvwxyza');
});

test('Shifts plainstring by 1 keeping punctuations', () => {
    expect(caesarCipher('attack at dawn!', 1)).toBe('buubdl bu ebxo!');
});

test('Shifts plainstring by 1 keeping punctuations/case', () => {
    expect(caesarCipher('Attack at Dawn!', 1)).toBe('Buubdl bu Ebxo!');
});