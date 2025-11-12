/* You're building a simple scoring tool for a quiz app. Each student earns points for correct answers and loses points for wrong answers.
Scoring Rules:

4 points for each correct answer
-1 point for each wrong answer

If the student’s name is "Unknown", the system should return "Invalid Student"
Your Tasks:
Store the following in variables:
Student name: "Rahul"
Correct answers: 4
Wrong answers: 1
Write a function getFinalScore() that:
Accepts name, correct, and wrong as parameters
Uses a ternary operator to:
Return "Invalid Student" if name is "Unknown"
Otherwise, return the score calculated by (correct * 4) - (wrong * 1)
Call the function and print the result.
Use typeof to print the type of the result. */

let student = "Rahul";
    let crctans = 4;
    let wrongans =1;

    function getFinalScore(name,correct,wrong){
         return  (name.toLowerCase()==="Unknown")? "Invalid Student": (correct*4)-(wrong*1);
    }
   let score= getFinalScore(student,crctans,wrongans);
   console.log("student name:",student);
   console.log("correctanswer:",crctans);
   console.log("wronganswers:",wrongans);
   console.log("FinalScore is:",score);
   console.log("datatype of score:",typeof score);