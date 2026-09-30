let num1 = 10;
let num2 = 10.65;

console.log(num1);
console.log(num2);

let name1 = "'Mr' Jack Sparrow";
let name2 = '"Mr" Jack Sparrow';

console.log(name1);
console.log(name2);

let firstName = "John";
let lastName = "Wick";

let empInfo = "Employee first name is "+ firstName+", and last name is "+lastName;
console.log(empInfo);

// with backticks
let newEmpInfo = `Employee first name is ${firstName}, and last name is ${lastName}`;
console.log(newEmpInfo);

// boolean
let value1 = true;
let value2 = false;

console.log(typeof value1);
console.log(typeof value2);

// undefined
let empAge;
console.log(empAge);

// null

let salary = 25000;
salary = null;
console.log(salary);

// object
let empData = {
    "empName" : "John Wick",
    "empId" : 1234,
    "visaStatus" : true,
    "address" : {
        "city" : "New York",
        "state" : "New York",
        "country" : "USA"
    }

}

console.log(typeof empData);
console.log(empData);
console.log(empData.empName);
console.log(empData.address);
console.log(empData.address.city);
console.log(empData["empName"])

let counter = 120;
console.log(typeof (counter));

counter = false;
console.log(typeof (counter));

counter = "foo";
console.log(typeof(counter));

// undefined
let n;
console.log(n);
console.log(typeof(n));


let obj = null;
console.log(obj);

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

