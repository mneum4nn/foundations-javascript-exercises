const convertToCelsius = function(fahrenheit) {
  let cels=0;
  if (typeof fahrenheit == "number"){
    cels = (9/5)*(fahrenheit-32);
    if (cels%1 != 0){
      cels = (((9/5)*(fahrenheit-32))*10)/10;
    }
    return cels;
  } else {
  return Error;
  }
};

const convertToFahrenheit = function(celsius) {
  let fahr=0;
  if (typeof fahrenheit == "number"){
    fahr = (9/5)*(celsius+32);
    if (fahr%1 != 0){
      fahr = (((9/5)*(celsius+32))*10)/10;
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
