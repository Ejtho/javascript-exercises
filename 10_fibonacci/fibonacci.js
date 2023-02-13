const fibonacci = function(num) {
    const sequence = [0, 1];
    for (i = 2; i < num; i++) {
        // Add the sum of the two previous numbers to the current index
        sequence.push(sequence[i-1] + sequence[i-2]);
    }
    return sequence[num];
};

// Do not edit below this line
module.exports = fibonacci;
