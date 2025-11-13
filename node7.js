/* You are working for a small shop owner who wants to print the manager's name neatly and highlight their role. The shop owner gives you two details:
Manager's name: "robert smith"
Manager's role: "handling inventory and logistics"
You need to:
Create a module named managerInfo.js that exports the name and role as an object.
Create another module named capitalizeName.js that exports a function to capitalize the first letter of the first and last name without using .map().
In your main file app.js, do the following:
Import both modules
Use your function to capitalize the first letters of the first and last names
Convert the role to uppercase
Print the number of characters in the role
Use the .search() method to check if the word "inventory" exists in the role (if found, .search() returns the position, otherwise -1)
Print all results to the console  */

let manager = require("./managerInfo");
let capitalizeName = require("./capitalizename");

let formattedName = capitalizeName(manager.managerName);
let upperRole = manager.managerRole.toUpperCase();
let roleLength = manager.managerRole.length;
let searchPosition = manager.managerRole.search("inventory");

console.log("Manager Name:", formattedName);
console.log("Manager Role (uppercase):", upperRole);
console.log("Role Length:", roleLength);
console.log("Position of 'inventory':", searchPosition);
