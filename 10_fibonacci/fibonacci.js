const fibonacci = function (number) {
    let febTotal = 1,
        febOne = 0,
        febTwo = 1;

    for (i = 2; i < number; i++) {
        febOne = febTwo;
        febTwo = febTotal;
        febTotal = febOne + febTwo;
    }
    return febTotal
};

// Do not edit below this line
module.exports = fibonacci;
