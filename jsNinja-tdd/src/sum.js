'use strict';



const sum = (num1, num2) => {
  const isEmpty = arg => {
    return !arg;
  };

  const isNumber = arg => {
    return Object.prototype.toString.call(arg) === '[object Number]';
  };

  if (isEmpty(num1) || isEmpty(num2))
    return new Error('Os parâmetros devem ser numeros');
  if(!isNumber(num1) || !isNumber(num2))
    return new Error('Passe dois números por parâmetro');

  return num1 + num2;

};

module.exports = sum;