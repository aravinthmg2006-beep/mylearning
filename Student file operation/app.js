//This can be access from student 

// const students = require("./students");

// console.log(students[2]);


// const fs = require("fs");

// fs.readFile("student.csv", "utf8", (err, data) => {

//     if (err) {
//         console.log("Error reading file");
//         return;
//     }

//     console.log(data);

// });








// const fs = require("fs");

// fs.readFile("student.csv", "utf8", (err, data) => {

//     if (err) {
//         console.log("Error reading file");
//         return;
//     }

//     const rows = data.trim().split("\n");
//     console.log(rows[0])

//     console.log(rows[1]); // First student
// });






// const fs = require("fs");

// // Read the CSV file
// fs.readFile("student.csv", "utf8", (err, data) => {

//     if (err) {
//         console.log("Error reading file");
//         return;
//     }

//     // Convert file content into rows
//     const rows = data.trim().split("\n");

//     // First row is the heading
//     const headers = rows[0].split(",");

//     // Store students
//     const students = [];

//     // Start from row 1 because row 0 contains headings
//     for (let i = 1; i < rows.length; i++) {

//         const values = rows[i].split(",");

//         const student = {
//             id: Number(values[0]),
//             name: values[1],
//             age: Number(values[2]),
//             course: values[3],
//             mark: Number(values[4])
//         };

//         students.push(student);
//     }

//     console.log(students);

//     // Access first student
//     console.log(students[0]);

//     // Access first student's name
//     console.log(students[0].name);

//     // Access second student's course
//     console.log(students[1].course);
// });






// let total = 0;

// for (let i = 0; i < students.length; i++) {
//     total = total + students[i].mark;
// }

// const average = total / students.length;

// console.log("Total marks:", total);
// console.log("Average mark:", average);



// const fs = require("fs");

// // Read student.csv
// fs.readFile("student.csv", "utf8", (err, data) => {

//     if (err) {
//         console.log("Error reading student.csv");
//         return;
//     }

//     // Convert CSV data into rows
//     const rows = data.trim().split("\n");

//     const students = [];

//     // Convert each row into an object
//     for (let i = 1; i < rows.length; i++) {

//         const values = rows[i].split(",");

//         const student = {
//             id: Number(values[0]),
//             name: values[1],
//             age: Number(values[2]),
//             course: values[3],

//             mathematics: Number(values[4]),
//             physics: Number(values[5]),
//             chemistry: Number(values[6]),
//             programming: Number(values[7]),
//             english: Number(values[8]),
//             engineeringDrawing: Number(values[9]),
//             communicationSkills: Number(values[10])
//         };

//         students.push(student);
//     }

//     // Calculate total and average for every student
//     for (let i = 0; i < students.length; i++) {

//         const student = students[i];

//         const total =
//             student.mathematics +
//             student.physics +
//             student.chemistry +
//             student.programming +
//             student.english +
//             student.engineeringDrawing +
//             student.communicationSkills;

//         const average = total / 7;

//         console.log("Name:", student.name);
//         console.log("Total Marks:", total);
//         console.log("Average Marks:", average.toFixed(2));
//         console.log("----------------------");
//     }
// });





const fs = require("fs");

fs.readFile("student.csv", "utf8", (err, data) => {

    if (err) {
        console.log("Error reading student.csv");
        return;
    }

    const rows = data.trim().split("\n");
    const students = [];

    // Convert CSV data into student objects
    for (let i = 1; i < rows.length; i++) {

        const values = rows[i].split(",");

        students.push({
            id: Number(values[0]),
            name: values[1],
            age: Number(values[2]),
            course: values[3],

            mathematics: Number(values[4]),
            physics: Number(values[5]),
            chemistry: Number(values[6]),
            programming: Number(values[7]),
            english: Number(values[8]),
            engineeringDrawing: Number(values[9]),
            communicationSkills: Number(values[10])
        });
    }

    const results = [];

    // Calculate total, average and failed subjects
    for (let student of students) {

        const subjects = {
            Mathematics: student.mathematics,
            Physics: student.physics,
            Chemistry: student.chemistry,
            Programming: student.programming,
            English: student.english,
            EngineeringDrawing: student.engineeringDrawing,
            CommunicationSkills: student.communicationSkills
        };

        let total = 0;
        let failedSubjects = [];

        for (let subject in subjects) {

            const mark = subjects[subject];

            total += mark;

            if (mark < 40) {
                failedSubjects.push(subject);
            }
        }

        const average = total / 7;

        results.push({
            name: student.name,
            total: total,
            average: average,
            failedSubjects: failedSubjects
        });
    }

    // Print every student's details
    console.log("========== ALL STUDENTS ==========\n");

    for (let student of results) {

        console.log("Name:", student.name);
        console.log("Total Marks:", student.total);
        console.log("Average:", student.average.toFixed(2));

        if (student.failedSubjects.length > 0) {
            console.log(
                "Failed Subjects:",
                student.failedSubjects.join(", ")
            );
        }

        console.log("------------------------------");
    }

    // Only students who passed all subjects can be toppers
    const toppers = results.filter(student => {
        return student.failedSubjects.length === 0;
    });

    // Sort students from highest total to lowest total
    toppers.sort((a, b) => b.total - a.total);

    // Display the top three students
    console.log("\n========== TOP 3 TOPPERS ==========\n");

    const topThree = toppers.slice(0, 3);

    for (let i = 0; i < topThree.length; i++) {

        console.log(`${i + 1}. ${topThree[i].name}`);
        console.log("Total Marks:", topThree[i].total);
        console.log("Average:", topThree[i].average.toFixed(2));

        console.log("------------------------------");
    }

});