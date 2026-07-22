// Create a object

// const person={
//     firstName:"Aravinth",
//     lastName:"Spidy",
//     age:20,
// };
// console.log(person);  




// Accessing the data


// const person={
//     firstName:"Aravinth",
//     lastName:"Spidy",
//     age:20

// };
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);

//Adding a properties

// const person={
//     firstName:"Aravinth",
//     lastName:"Spidy",
//     age:20

// };
// person.city="Chennai";
// person.area="porur";
// console.log(person)


// Updating the objects


// const person={
//     firstName:"Aravinth",
//     lastName:"Spidy",
//     age:20
// }
// console.log(person)
// person.age=21
// person.lastName="spidy man"
// console.log(person)



// Deleting a property




// const person={
//     firstName:"Aravinth",
//     lastName:"Spidy",
//     age:20
// };
// console.log(person)
// delete person.age;
// console.log(person)


// Creating Multople Objects



// const person1={
//     firstName:"Aravinth",
//     lastName:"Spidy",
//     age:20
// };


// const person2={
//     firstName:"kumar",
//     lastName:"MG",
//     age:22
// };

// const person3={
//     firstName:"harish",
//     lastName:"ram",
//     age:21
// };
// console.log(person1);
// console.log(person2);
// console.log(person3);




// Object with Function 



// const person={
//     firstName:"Aravinth",
//     lastName:"Spidy",
//     age:20,

// greet:function(){
//     console.log("Hello i am "+ this.firstName);
// }
// };
// person.greet();



//Object Keys,Values,Entries


// const person={
//     firstName:"Aravinth",
//     lastName:"Spidy",
//     age:20
// };
// const keys=Object.keys(person)

// const values=Object.values(person)


// const entries=Object.entries(person)

// console.log("Keys: ")
// console.log(keys);

// console.log("values : ");
// console.log(values)

// console.log("Entries : ")
// console.log(entries)



// Copying an Objects 


const person={
    firstName:"Aravinth",
    lastName:"Spidy",
    age:20
};

const newPerson={...person}
newPerson.name="JD";

console.log("Original name: ");
console.log(person)


console.log("New name: ")
console.log(newPerson);
