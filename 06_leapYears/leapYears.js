const leapYears = function(year) {
    let isLeap;
    if (year % 4 == 0) {
        //Years that are multiples of 4, 100, and 400 are leap years.
        if (year % 100 == 0 && year % 400 == 0) {
            return isLeap = true;
        //Years that are multiples of 4 and 100, but not 400 are not leap years.
        } else if (year % 100 == 0 && year % 400 != 0) {
            return isLeap = false;
        //Years that are multiples of 4 but not 100 are leap years.
        } else {
            return isLeap = true;
        }
    } else {
        //Years that aren't multiples of four are not leap years.
        return isLeap = false;
    }
};

// Do not edit below this line
module.exports = leapYears;
