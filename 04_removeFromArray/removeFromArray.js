const removeFromArray = function(array, removal) {
    const newArray = array;
    if (typeof removal == "object") {
        for (i = 0; i < array.length; i++) {
            for (j = 0; j < removal.length; j++) {
                if (Number(newArray[i]) == Number(removal[j])) {
                    newArray.splice(i, 1);
                }
            }
        } 
    } else {
        for (i= 0; i < array.length; i++) {
            if (Number(newArray[i]) == Number(removal)) {
                newArray.splice(i, 1);
            }
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
