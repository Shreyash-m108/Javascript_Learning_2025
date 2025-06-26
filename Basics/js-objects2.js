let person1 = {
    name : {
        firstName : "Shreyash",
        lastName : "Magdum"
    },
    address : {
        street : {
            strtNumber : 123,
            strtName : "Jonathan Street"
        },
        city : "Sangli"
    },
    age : 22
}

// console.log(person1.address.street.strtNumber);

let person2 = {
    name : {
        firstName : "Gaurav",
        lastName : "Patil"
    },
    address : {
        street : {
            strtNumber : 456,
            strtName : "Rougue Street"
        },
        city : "Kolhapur"
    },
    age : 23
}

const persons = {... person1 , ... person2}
// console.log(persons);

const persons2 = Object.assign(person1,person2)
// console.log(persons2);

console.log(Object.keys(person2));
