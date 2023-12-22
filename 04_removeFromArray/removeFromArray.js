const removeFromArray = function(array, ...elements) {
    for (let element of elements) {
        for (i = 0; i < array.length; i++) {
            if (array[i] === element) {
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
