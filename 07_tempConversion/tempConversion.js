const convertToCelsius = function(fahrenheit) {
  let cels=0;
  if (typeof fahrenheit == "number"){
    cels = (fahrenheit-32)/1.8;
    if (cels%1 != 0){
      cels = Math.round(cels*10)/10;
    }
    return cels;
  } else {
  return Error;
  }
};

const convertToFahrenheit = function(celsius) {
  let fahr=0;
  if (typeof celsius == "number"){
    fahr = (1.8*celsius)+32;
    if (fahr%1 != 0){
      fahr = Math.round(fahr*10)/10;
    }
    return fahr;
  } else {
    return Error;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
