let employeeInfo : {
    firstName : string;
    lastName :  string;
    age : number;
    isActive : boolean;
    visaStatus : boolean;
};

employeeInfo = {
    firstName : 'John',
    lastName : 'Wick',
    age : 30,
    isActive : true,
    visaStatus : false
}

console.log(employeeInfo);


console.log(`employee visa status: ${employeeInfo.visaStatus}`);

let stdInfo : {} = {};

employeeInfo.firstName = 'Luffy';

console.log(employeeInfo.firstName);



