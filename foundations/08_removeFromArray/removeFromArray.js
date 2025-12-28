const removeFromArray = function(arr, ...args) {
    let resultArray = arr;

    const removeArgFromArray = function(arr, arg) {
        let newArray = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== arg) {
                newArray.push(arr[i]);
            } 
        }
        return newArray;
    };

    for (let arg of args) {
        resultArray = removeArgFromArray(resultArray, arg);
    }

    return resultArray;
};



// Do not edit below this line
module.exports = removeFromArray;
