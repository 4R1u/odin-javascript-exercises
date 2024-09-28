const removeFromArray = function(array, ...items) {
    for (const removedItem of items) {
        for (let removedIndex = array.indexOf(removedItem);
             -1 !== removedIndex;
             removedIndex = array.indexOf(removedItem)) {
            array.splice(removedIndex, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
