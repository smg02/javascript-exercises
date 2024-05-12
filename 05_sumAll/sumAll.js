const sumAll = function(origin, theEnd) {
    let totalValue = 0;
    if (origin < 0 || theEnd < 0) return 'ERROR'
    if (!Number.isInteger(origin) || !Number.isInteger(theEnd)) return "ERROR";
    if (origin > theEnd) {
        temp = theEnd;
        origin = theEnd;
        origin = temp;
    } 
    for (i = origin; i <= theEnd; i++) {
        totalValue += i;
    }
    return totalValue
};

// Do not edit below this line
module.exports = sumAll;
