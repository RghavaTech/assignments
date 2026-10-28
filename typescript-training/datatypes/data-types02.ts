// Non-primitive data types
// object data type represents a collection of key-value pair stored together

interface empInfo {
    "empName" : string,
    "empId" : number,
    "visaStatus" : boolean,
    "address"   : {
        "city" : string,
        "state" : string,
        "country" : string
    }
}


// object
let empData : empInfo= {
    "empName" : "Monkey D.Luffy",
    "empId" : 1234,
    "visaStatus" : true,
    "address"   : {
        "city" : "Hyderabad",
        "state" : "Telangana",
        "country" : "India"
    }
}