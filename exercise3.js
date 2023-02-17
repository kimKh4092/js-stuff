const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    let sum = 0;


    for (let grade of marks) {
        sum = sum + grade;
    }
    mean = sum / marks.length;

    if (mean < 60) return "F";
    if (mean < 70) return "D";
    if (mean < 80) return "C";
    if (mean < 90) return "B";
    return "A";

}