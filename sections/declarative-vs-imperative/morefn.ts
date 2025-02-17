const add = (a: number, b: number) => a + b;
const addMany = (...args: number[]) => args.reduce(add, 0);
const div = (a: number, b: number) => a / b;
const mapProp = <T>(k: keyof T, arr: T[]) => arr.map(a => a[k]);
const countAverage = (arr: number[]) => div(addMany(...arr), arr.length);

interface Result {
    id: number;
    result:number;
}

const resultsArr1: Result[] = [
    { id: 1, result: 64 },
    { id: 2, result: 87 },
    { id: 3, result: 89 }
];

const resultsAverage = countAverage(mapProp("result", resultsArr1));
console.log(resultsAverage);

/*
This code is not reusable, but the add, addMany, div, mapProp, and avg functions are reusable. 
This demonstrates how declarative programming can lead to more reusable code than imperative programming.

*/