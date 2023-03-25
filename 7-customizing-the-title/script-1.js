// This:
// let someVar = [the condition] ? [the value if true] : [the value if false];

// Is the same as this:
/*
      let someVar;
      if ([the condition]) {
        someVar = [the value if true];
      } else {
        someVar = [the value if false];
      }
     */

let num = 0;
let answer = num > 10 ? num : 42;

console.log(answer);

// That's the same as doing this...
// let num = 28;
// let answer;

// if (num > 10) {
// 	answer = num;
// } else {
// 	answer = 42;
// }

// console.log(answer);
