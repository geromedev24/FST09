// Array - data structure that allows storing different variables
let fruits = ["Apple", "Banana", "Orange", "Avocado", "Chico"];
console.log("Fruits:", fruits);
// Index specify the location of the element
// 0,1,2,3

console.log("Length of Fruits:", fruits.length);
console.log("First Fruit:", fruits[0]);
console.log("Last Fruit:", fruits[3]);
console.log("Last Fruit:", fruits[fruits.length - 1]);

// Update elements
fruits[0] = "Mango";
console.log("Fruits:", fruits);

// property - an information about the object
// methods - function that belongs to an object
// Add Element
// .push method - .push() add an element at the end of the array

fruits.push("Appple", "Grapes")
console.log("Fruits:", fruits);

// .pop() - delete an element at the end of the array
let deletedFruits = fruits.pop();
console.log("Deleted Fruits:", deletedFruits);
console.log("Fruits:", fruits);

// .includes(): check if an element exists
// Return: either true or false
// includes method is case sensitive
console.log("Is Orange inside of fruits:", fruits.includes("Orange"));

fruits.forEach(function(fruit){
    console.log("Fruit:", fruit);
});

