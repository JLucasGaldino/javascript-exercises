const sumAll = function(number1, number2) {
    //sort arguments alphanumerically
    let argumentArray = [number1, number2];
    argumentArray.sort();
    let min = argumentArray[0];
    let max = argumentArray[1];
    //return error for negative minimum
    if (min < 0) {
        return 'ERROR';
        //return error for non-numerical values
    }else if (typeof(min) !== "number" || typeof(max) !== "number"){
        return 'ERROR';
    } else {
        //calculate sum
        let totalSum = 0;
        for (i = min; i <= max; i++) {
            totalSum += i;
        }
        return totalSum;
    }
};

// Do not edit below this line
module.exports = sumAll;
