"use strict";

// Task-1
function divideByThreeAndSeven(num) {
  if (num % 3 == 0 && num % 7 == 0) {
    return `${num} - 3 ve 7 ye tam bolunur.`;
  } else {
    return `${num} - 3 ve 7 ye tam bolunmur.`;
  }
}

let divideByThreeAndSevenArr = (num) => {
  if (num % 3 == 0 && num % 7 == 0) {
    return `${num} - 3 ve 7 ye tam bolunur.`;
  } else {
    return `${num} - 3 ve 7 ye tam bolunmur.`;
  }
};

console.log(divideByThreeAndSeven(21));
console.log(divideByThreeAndSevenArr(23));

// Task-2

function calcFactorial(num) {
  let sum = 1;
  if (num > 0) {
    for (let i = num; i >= 1; i--) {
      sum *= i;
    }
  } else {
    console.log(`${num}: musbet eded olmalidir`);
  }

  return sum;
}

let calcFactorialArr = (num) => {
  let sum = 1;
  if (num > 0) {
    for (let i = num; i >= 1; i--) {
      sum *= i;
    }
  } else {
    console.log(`${num}: musbet eded olmalidir`);
  }

  return sum;
};

console.log(calcFactorial(3));
console.log(calcFactorialArr(4));

// Task-3

function calcSquareOfEven(nums) {
  let sum = 0;
  let square = 0;
  nums.forEach((num) => {
    if (num % 2 == 0) {
      square = num ** 2;
      sum += square;
    }
  });

  return sum;
}

let calcSquareOfEvenArr = (nums) => {
  let sum = 0;
  let square = 0;
  nums.forEach((num) => {
    if (num % 2 == 0) {
      square = num ** 2;
      sum += square;
    }
  });

  return sum;
};

console.log(calcSquareOfEven([2, 3, 4, 5, 6]));
console.log(calcSquareOfEvenArr([2, 3, 4, 5, 6, 4]));

// Task-4

function checkFullInfo(mail, password) {
  if (mail == "cavid@code.edu.az" && password == "12345") {
    console.log("Giris Olundu");
  } else {
    console.log("Mail ve yaxud password sehvdir");
  }
}

let checkFullInfoArr = (mail, password) => {
  if (mail === "cavid@code.edu.az" && password === "12345") {
    console.log("Giris Olundu");
  } else {
    console.log("Mail ve yaxud password sehvdir");
  }
};

checkFullInfo("cavid@code.edu.az", 12345);
checkFullInfoArr("cavid@codeedu.az", "12345");

// Task-5

function calcSumOfOdd(nums) {
  let sum = 0;

  nums.forEach((num) => {
    if (num % 2 == 1) {
      sum += num;
    }
  });

  return sum;
}

let calcSumOfOddArr = (nums) => {
  let sum = 0;

  nums.forEach((num) => {
    if (num % 2 == 1) {
      sum += num;
    }
  });

  return sum;
};

console.log(calcSumOfOdd([2, 4, 3, 2, 465767]));
console.log(calcSumOfOddArr([2, 4, 3, 2, 7]));

// Task-6

function countOfEven(nums) {
  let count = 0;

  nums.forEach((num) => {
    if (num % 2 == 0) {
      count++;
    }
  });

  return count;
}

let countOfEvenArr = (nums) => {
  let count = 0;

  nums.forEach((num) => {
    if (num % 2 == 0) {
      count++;
    }
  });

  return count;
};

console.log(countOfEven([2, 4, 23, 423, 45]));
console.log(countOfEvenArr([2, 4, 23, 423, 45]));
