const fs = require("fs");

// Read users.json
const data = fs.readFileSync("users.json", "utf8");

// Convert JSON string into JavaScript array
const users = JSON.parse(data);

// Create a new user
const newUser = {
    id: 2,
    name: "David",
    email: "david@gmail.com"
};

// Add the new user to the array
users.push(newUser);

// Display the updated array
console.log(users);