const fs = require("fs");

// Create a file
fs.writeFileSync( // if this can add a new one.
//fs.appendFileSync(
    "users.txt",
    "\nJohn\nDavid\nAlex\nNew User\nAravinth\nJD"
);

console.log("File created successfully");

// Read the file
const data = fs.readFileSync("users.txt", "utf8");

console.log(data); 