const palindromes = function (string) {
    return string.replace(/[^a-zA-Z0-9 ]/g, '').split('').reverse('').join('') 
};

// Do not edit below this line
module.exports = palindromes;
