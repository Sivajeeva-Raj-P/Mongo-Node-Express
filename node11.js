/*Create a small Node.js program using the file system module that does the following:
Create a file named user.txt.
Ask the student to store a welcome message like "Welcome John" (you can directly write this string into the file).
Then read the content from the file and check if the name in the file is "John" using a function.
If the name matches, display "Valid User" in the terminal. Otherwise, display "Unknown User". */

var fs = require('fs');

 fs.appendFile('user.txt', 'Welcome John !', function (err) { 
  if (err) throw err;
  console.log('File written is successfull');
});
fs.readFile('user.txt',function(err,data){
    if (err) throw err;
    let content = (data.toString());
    CheckUser(content);
});
function CheckUser(content){
    let name = content.split(" ")[1];
    if(name=== "John"){
        console.log("Valid User");
    }
    else {
        console.log("Invalid user");
    }
};
