function analyzeArray(array) {
    const sortedArray = sortArray(array);

    return {
        average: getAverage(array),
        min: sortedArray[0],
        max: sortedArray[sortedArray.length - 1],
        length: array.length
    };
}

function sortArray(array) {
    return array.sort((a,b) => a - b);
}

function getAverage(array) {
    return array.reduce((a,b) => a + b, 0) / array.length;
}

module.exports = analyzeArray;