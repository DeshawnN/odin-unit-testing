function caesarCipher(string, shift) {
    const characters = string.split('');

    return characters.map(char => {
        if (!char.match(/[a-zA-Z]/)) return char;

        const offset = (char.match(/[a-z]/)) ? 97 : 65;
        const normalizedCharCode = char.charCodeAt(0) - offset;
        const shiftedNormalizedCharCode = (normalizedCharCode + shift) % 26;

        return String.fromCharCode(shiftedNormalizedCharCode + offset);
    }).join('');
}

module.exports = caesarCipher;