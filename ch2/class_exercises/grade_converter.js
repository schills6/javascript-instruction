console.log("Welcome to the Letter Grade Converter\n");
console.log("Enter numerical grade: ");
let numericalGrade = 90;
let letterGrade = "";
    if (numericalGrade >= 88) {
        letterGrade = "A";
        }
    else if (numericalGrade >= 80) {
        letterGrade = "B";
        }
    else if (numericalGrade >= 67) {
        letterGrade = "C";
        }
    else if (numericalGrade >= 60) {
        letterGrade = "D";
        }
    else {
        letterGrade = "F";
        }
    console.log("Letter grade: " + letterGrade +"\n");
    console.log("Continue? (y/n): ");
