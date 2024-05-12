const getTheTitles = function (array) {

    // real result using map()
    // return array.map((book)=>book.title))
    
    let result = [];
    let originalArray = Object.entries(array);

    for (i = 0; i < originalArray.length; i++) {
        result.push(originalArray[i][1].title)
    }
    return result
};

// Do not edit below this line
module.exports = getTheTitles;
