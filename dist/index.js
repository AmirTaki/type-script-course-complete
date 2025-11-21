"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Array  in type script');
let numbers = [1, 2, 3, 4, 'a', true];
console.log(numbers);
let arrayNumber = [1, 2, 3, 4];
let arrayString = ['a', 'b', 'c'];
let nubStrArr = [1, 'a', 2, 'b', 3, 'c'];
let anyArray = [];
anyArray[0] = 1;
anyArray[1] = '1';
anyArray[2] = true;
console.log(anyArray);
arrayNumber.forEach((n => console.log(n.valueOf())));
//# sourceMappingURL=index.js.map