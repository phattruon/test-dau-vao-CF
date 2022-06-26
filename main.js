inputArray = [2, 3, 4, 5, 6, 8];
function adjacentElement(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    console.log(inputArray[i * 2] * inputArray[i * 2 + 1]);
  }
}
adjacentElement(inputArray);

const inputWeight = [60, 50, 70, 80, 90, 100];
function alternatingSums(inputWeight) {
  sum = 0;
  num1 = [];
  for (let i = 0; i < inputWeight.length; i++) {
    num1.push(inputWeight[i * 2]);
    console.log(num1);
  }
}
alternatingSums(inputWeight);
