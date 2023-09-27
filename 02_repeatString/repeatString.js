const repeatString = function(phrase, repetitions) {
    repeated = "";
    if (repetitions >= 0){
        for(let i = 0; i < repetitions; i++){
            repeated+=phrase;
        }
    } else
    return("ERROR");
    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
