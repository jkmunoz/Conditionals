// Grades
// This generates a random number between 0 and 100.
var testGrade = Math.floor(Math.random() * 100);

// This shows the grade that was given. 
console.log(testGrade);

// This gives a grade according to what number was generated. 
if (testGrade <= 65) {
    console.log("F");
} else if (testGrade > 65 && testGrade <= 70) {
    console.log("D");
} else if (testGrade > 70 && testGrade <= 79) {
    console.log("C");
} else if (testGrade > 79 && testGrade <= 89) {
    console.log("B");
} else if (testGrade > 89 && testGrade <= 100) {
    console.log("A")
}