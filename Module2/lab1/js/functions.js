
function halfNumber(num) {
  const result = num / 2;
  console.log('Half of ${num} is ${result}.');
  return result;
}


function squareNumber(num) {
    const result = num * num;
    console.log('The result of squaring the number ${num} is ${result}');
    return result;
}


function percentOf(num1, num2) {
    const percent = (num1 / num2) * 100;
    console.log(`${num1} is ${percent}% of ${num2}.`);
    return percent;
}


function findModulus(num1, num2) {
    const mod = num2 % num1;
    console.log(`${mod} is the modulus of ${num1} and ${num2}.`);
    return mod;
}