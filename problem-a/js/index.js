'use strict';

/** Basic Types */

// Define a new variable `motto` for the value "The iSchool is my school"
let motto = "The iSchool is my school";
console.log(JSON.stringify(motto)); // LOG[0]

// Define a variable `mottoLength` that stores the length of the motto.
// Use the `.length` property
const mottoLength = motto.length;
console.log(mottoLength); // LOG[1]

// Use the `indexOf()` String method to see if the word "cool" is in the string.
// Log out a _boolean_ whether it is or not.
console.log(motto.indexOf("cool") !== -1); // LOG[2]

// Use a String method to replace the word "iSchool" in the `motto` variable with
// the words "Information School". The new value should be re-assigned to the
// `motto` variable.
motto = motto.replace("iSchool", "Information School");
console.log(JSON.stringify(motto)); // LOG[3]

// Calculate the ratio between the length of the updated motto and the length of
// the old (which you had saved in a variable!). Log out this ratio as a
// percentage with two decimal places of precision (e.g., `"123.45%"`).
console.log((motto.length * 100 / mottoLength).toFixed(2) + "%"); // LOG[4]


/** Arrays **/

// Create an array `numbers` that contains these 10 numbers:
// 1 4 1 5 9 2 6 5 3 5
const numbers = [1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(JSON.stringify(numbers)); // LOG[5]

// Use bracket notation to change the `4` in the array to a `4.2`.
numbers[1] = 4.2;
console.log(JSON.stringify(numbers)); // LOG[6]

// Add the number 3 to the END of the array.
numbers.push(3);
console.log(JSON.stringify(numbers)); // LOG[7]

// Find the median (middle) value of the numbers in the array.
numbers.sort((a, b) => a - b); // numeric sort
const index = Math.floor(numbers.length / 2);
console.log(numbers[index]); // LOG[8]


/** Objects **/

// Create a variable `rect` that represents a rectangle.
const rect = {
  x: 30,
  y: 50,
  width: 100,
  height: 50
};
console.log(JSON.stringify(rect)); // LOG[9]

// Log out the x- and y- coordinates of the rectangle (its location).
console.log(`${rect.x}, ${rect.y}`); // LOG[10]

// Set the rectangle's height to be the square root of its width.
rect.height = Math.sqrt(rect.width);

// Log out the rectangle's area.
console.log(rect.height * rect.width); // LOG[11]

// Create a variable `circle` that represents a circle.
const circle = {
  cx: 34,
  cy: 43,
  radius: numbers[numbers.length - 1]
};
console.log(JSON.stringify(circle)); // LOG[12]

// Create an array `shapes` that represents a list of shapes.
const shapes = [rect, circle];
console.log(JSON.stringify(shapes)); // LOG[13]

// Add a new ANONYMOUS object representing a right triangle.
shapes.push({
  base: 33,
  height: 44
});
console.log(JSON.stringify(shapes)); // LOG[14]

// Log out the triangle's `hypotenuse` property (don't calculate it).
console.log(shapes[shapes.length - 1].hypotenuse); // LOG[15]

// Assign the triangle a 'hypotenuse' property of `55`.
shapes[shapes.length - 1].hypotenuse = 55;
console.log(JSON.stringify(shapes)); // LOG[16]
