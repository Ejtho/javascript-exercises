const leapYears = function(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                alert(`${year} is a leap year.`);
            } else {
                alert(`${year} is not leap year.`);
            }
        } else {
            alert(`${year} is a leap year.`);
        }
    } else {
        alert(`${year} is not leap year.`);
    } 
};

// Do not edit below this line
module.exports = leapYears;
