const fs = require("fs");

if (fs.existsSync("users.txt")) {
    console.log("File exists");

    const data = fs.readFileSync("users.txt", "utf8");

    console.log(data);
} else {
    console.log("File does not exist");
}