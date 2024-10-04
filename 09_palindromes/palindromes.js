const palindromes = function (str) {
    for (let i = 0; i < str.length / 2; ++i) {
        if (str[i] != str[-i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
