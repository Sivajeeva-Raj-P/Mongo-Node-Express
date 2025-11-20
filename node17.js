/* Create a buffer from the message "NodeJS is fast".
Slice the buffer to extract only the word "NodeJS" and print it.
Create another buffer from the word "Powerful".
Compare both buffers ("NodeJS" and "Powerful") and display which one comes first alphabetically.
Convert the "NodeJS" buffer to JSON and print the result.  */

let buf1 = new Buffer.from("NodeJS is fast");
let result1 = buf1.slice(0,6);
console.log("result1 is:", result1.toString());
let buf2 = new Buffer.from("Powerful");
let result2 = result1.compare(buf2);
if(result2 === 0){
    console.log("Buffers are same");
}
else if(result2 < 0){
    console.log("Nodejs comes first");
}
else {
    console.log("powerful comes first");
}
var buf3 = result1.toJSON();
console.log("JSON Text is;",buf3);