const removeFromArray = function(arr) {
    let newArr = [];
    let toBeRemoved = [];
    for (let i=1; i<=(arguments.length-1); i++){
        toBeRemoved.push(arguments[i])
        }
    for (let j = 0; j<arr.length; j++){
        if (toBeRemoved.indexOf(arr[j]) == -1){
            newArr.push(arr[j]);
            }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
