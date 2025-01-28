console.log("Hello World!");
// This is a single line comment
/*
This is a
multi-line
comment.
*/

// Variables: containers/box.
/*
let - mutable/changeable - block scope variable
var - mutable/changeable - global scope variable
const - immutable/unchangeable - block scope variable
*/ 

// Camel Case naming convention.
let firstName = "John";
console.log("Firstname:", firstName);
firstName = "Jane";
console.log("Firstname:", firstName);

var lastName = "Doe";
console.log("Lastname:", lastName);
lastName = "Smith";
console.log("Lastname:", lastName);

// {} - Code Block
{
    var email = "janesmith@example.com";
    let userName = "janesmith40";
    console.log("Username:", userName);
  }
  /*
  Note: You can only access a block scope variable 
  inside of the block where you defined it.
  console.log("Username:", username); 
  ReferenceError: username is not defined.
  */
  console.log("Email:", email);

const birthday = "01-24-1999";
console.log("Birthday:", birthday);
// birthday = "01-25-1999"; TypeError: Assignment to constant variable.

