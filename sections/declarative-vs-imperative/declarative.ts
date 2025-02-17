

// // sum
// // devide
// interface Result {
//     id: number;
//     result:number;
// }

// const resultsArr: Result[] = [
//     { id: 1, result: 64 },
//     { id: 2, result: 87 },
//     { id: 3, result: 89 }
// ];

// const add = (a: number, b: number) => a + b;
// const division = (a: number, b: number) => a / b;

// const avg = (arr: Result[]) =>
//     division(arr.map(a => a.result).reduce(add, 0), arr.length)

// const resultsAvg1 = avg(resultsArr);
// console.log(resultsAvg1);
interface Result { id: number; result: number };

const resultsArr: Result[] = [
  { id: 1, result: 64 },
  { id: 2, result: 87 },
  { id: 3, result: 89 }
];

// Pure functions for each step
const getResults = (results: Result[]) => results.map(r => r.result);
const sum = (numbers: number[]) => numbers.reduce((acc, val) => acc + val, 0);
const average = (numbers: number[]) => sum(numbers) / numbers.length;

// Composing the functions
const calculateAverage = (results: Result[]) => average(getResults(results));

console.log(calculateAverage(resultsArr)); // Output: 80

