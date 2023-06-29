const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

const intersection = arrNumber1.filter(number => arrNumber2.includes(number) && arrNumber3.includes(number));

console.log(intersection);
