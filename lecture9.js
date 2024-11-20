// Examples of for loop
console.log("For loop example:");
for (let i = 1; i <= 3; i++) {
console.log("Iteration:", i);
}
//output:
// For loop example:
// Iteration: 1
// Iteration: 2
// Iteration: 3
// String example
let str = "Hello, JavaScript!";
console.log(str);
//output:
// Hello, JavaScript!
// str.length example
console.log("String length:", str.length);
//output:
// String length: 18
// Accessing string by index
console.log("Character at index 0:", str[0]);
//output:
//Character at index 0: H
// String interpolation (template literals)
let firstName = "Harry";
let greeting = `Hello, ${firstName}!`;
console.log(greeting);
//output:
//Hello, Harry!
// toUpperCase() and toLowerCase() examples
console.log("\ntoUpperCase():", str.toUpperCase());
console.log("toLowerCase():", str.toLowerCase());
//output:
//toUpperCase(): HELLO, JAVASCRIPT!
//toLowerCase(): hello, javascript!
// trim() example (removes whitespace from the start and end)
let str1 = " Hello, JavaScript! ";
console.log("\ntrim() example:", `"${str1.trim()}"`);
//output:
//trim() example: "Hello, JavaScript!"
// slice() example (extracting part of the string)
// str = "Hello, JavaScript!";
// start index is included and stop is not
console.log("slice(2, 8):", str.slice(2, 8));
//output:
//slice(2, 8): llo, J
// concat() example (concatenating strings)
let part1 = "Hello";
let part2 = "World";
let combined = part1.concat(", ", part2, "!");
console.log("\nconcat() example:", combined);
//output:
//concat() example: Hello, World!
// replace() example
// str = "Hello, JavaScript!";
let replacedStr = str.replace("JavaScript", "JS");
console.log("\nreplace() example:", replacedStr);
//output:
//replace() example: Hello, JS!
// charAt() example (getting character at specific index)
// str = "Hello, JavaScript!";
console.log("charAt(7):", str.charAt(7));
//output:
//charAt(7): J
// Defining arrays
let arr = [1, 2, 3];
console.log("\nArray:", arr);
//output:
//Array:[1, 2, 3]
// push() example (add elements to the end of the array)
arr.push(4, 5);
console.log("After push(4, 5):", arr);
//output:
//After push(4, 5):[1, 2, 3, 4, 5]
// pop() example (remove the last element)
let lastElement = arr.pop();
console.log("After pop():", arr);
console.log("Popped element:", lastElement);
//output:
//After pop(): [1, 2, 3, 4]
//Popped element: 5
// toString() example (convert array to string)
console.log("Array as string:", arr.toString());
//output:
//Array as string: 1,2,3,4
// concat() for arrays example
let arr2 = [6, 7, 8];
let combinedArr = arr.concat(arr2);
console.log("\nArray concatenation using concat():", combinedArr);
//output:
//Array concatenation using concat(): [1, 2, 3, 4, 6, 7, 8]
// unshift() example (add elements to the beginning)
arr.unshift(100);
// arr.unshift(100,200,300); you can multiple elements
console.log("After unshift(100):", arr);
//output:
//After unshift(100):[100, 1, 2, 3, 4]
// shift() example (remove the first element, one at a time)
let firstElement = arr.shift();
console.log("After shift():", arr);
console.log("Shifted element:", firstElement);
//output:
//After shift(): [1, 2, 3, 4]
//Shifted element: 100
// slice() example (extracting a portion of the array)
//it includes the start index but not the stop/end index
let slicedArr = arr.slice(1, 3);
console.log("\nArray slice(1, 3):", slicedArr);
//Array slice(1, 3):[2, 3]
// splice() example (adding and removing elements)
arr.splice(1, 2, 9, 10); // Removes 2 elements at index 1 and inserts 9, 10
console.log("After splice(1, 2, 9, 10):", arr);
//output
//After splice(1, 2, 9, 10): [1, 9, 10, 4]
