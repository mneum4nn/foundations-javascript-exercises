const leapYears = function(years) {
    let isItLeap = false; 
    if (years%4 == 0)
    {
        if (years%100==0)
        {
            if (years%400==0){
                isItLeap=true;
            }
        } else
        isItLeap=true;
    }
    return isItLeap;
};

// Do not edit below this line
module.exports = leapYears;
