const convertToCelsius = function(fahrenheitOriginal) {
  let unroundedConvertedToCelsius = ((fahrenheitOriginal - 32) * 5 / 9);
  return Math.round(unroundedConvertedToCelsius * 10) / 10;
};

const convertToFahrenheit = function(celsiusOriginal) {
  let unroundedCOnvertedToFahrenheit = (celsiusOriginal * 9 / 5 + 32);
  return Math.round(unroundedCOnvertedToFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
