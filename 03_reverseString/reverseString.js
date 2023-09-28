const reverseString = function(str) {
    let letters = str.split(""); 
    let reversed = "";
    for (let i = str.length-1; i>=0;i--){
        reversed+=letters[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
