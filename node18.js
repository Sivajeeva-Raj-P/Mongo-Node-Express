/* Create a buffer from the sentence: "Node.js buffers are powerful".
Write "FAST " at the beginning of that buffer using buffer write methods.
Create another buffer with the sentence: " and flexible!".
Combine both buffers into a single one.
Convert the final buffer to a readable string and save it to a .txt file.
Log the full path of the file using global path info.
Save the file as buffer_output.txt in the same directory as your script. */

const fs = require("fs");
const path = require("path");

// creating new buffer
let buf1 = Buffer.from("Node.js buffers are powerful");
buf1.write("FAST ");   
let buf2 = Buffer.from(" and flexible!");
let finalBuffer = Buffer.concat([buf1, buf2]);
let finalString = finalBuffer.toString();

// global info
let filePath = path.join(__dirname, "buffer.txt");
fs.writeFileSync(filePath, finalString);
console.log("File saved at:", filePath);


