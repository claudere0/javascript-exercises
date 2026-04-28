const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]/g, '');
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverse +=str[i];
    }
    return str === reverse;
};

// Do not edit below this line
module.exports = palindromes;
