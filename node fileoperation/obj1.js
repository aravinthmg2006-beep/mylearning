// const student = {
//     name: "John",

//     address: {
//         city: "Chennai",
//         pincode: 600001,
//         doorno: 8
//     }
// };
// console.log(student.name);
// console.log(student.address.city);
// console.log(student.address.pincode);
// console.log(student.address.doorno);


// const person = new Object();

// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

// console.log(person.firstName);
// console.log(person.age);


// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     DoorNo: "50A 20B",
//     eyeColor: "blue"
// };

// console.log(JSON.stringify(person));
// -----------------------------------------------------------------------------------------------------------------------------------



// JavaScript Object.create()
// The Object.create() method creates an object from an existing object.


// const person = {
//   fName: "John",
//   lastName: "Doe",
//   language: "EN"
// };

// // Create new Object
// const man = Object.create(person);
// man.firstName = "Peter";
// console.log(person.fName);




// Object Keys, Values, and Entries

// const person = {
//     name: "John",
//     age: 25,
//     city: "Chennai"
// };

// const keys = Object.keys(person);
// const values = Object.values(person);
// const entries = Object.entries(person);

// console.log("Keys:");
// console.log(keys);

// console.log("Values:");
// console.log(values);

// console.log("Entries:");
// console.log(entries);


// Copying an Object


const person = {
    name: "John",
    age: 25
};

const newPerson = { ...person };

newPerson.name = "David";

console.log("Original Object:");
console.log(person);

console.log("Copied Object:");
console.log(newPerson);


