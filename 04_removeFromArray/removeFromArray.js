const removeFromArray = function (array, ...targets) {

    if (targets.length > 0) {
        for (i = 0; i < targets.length; i++) {
            array.map((num) => {
                if (num === targets[i]) array.splice(array.indexOf(num), 1);
            });
        }
    }

    return array
};

// Do not edit below this line
module.exports = removeFromArray;
