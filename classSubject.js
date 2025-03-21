// CLASS SUBJECT
let subjectTitle = prompt("Please enter the subject title:");  // Ask for the subject title and store it in 'subjectTitle'
let classSchedule = prompt("Please enter the class schedule (Time, Days):");  // Ask for the class schedule (time and days) and store it in 'classSchedule'
let classroom = prompt("Please enter the classroom:");  // Ask for the classroom information and store it in 'classroom'
let classInstructor = prompt("Please enter the class instructor:");  // Ask for the class instructor's name and store it in 'classInstructor'
let studentName = prompt("Please enter your name:");  // Ask for the student's name and store it in 'studentName'

// Log the formatted string to the console
console.log(`${studentName} is currently enrolled in ${subjectTitle} with a class schedule of ${classSchedule} at room ${classroom}. The instructor for the subject is ${classInstructor}.`);
// This logs a message using template literals, displaying the user's input in a complete sentence.
