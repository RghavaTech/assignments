//union data type ( | ) -- more than one data type with in same variable
let address : string | number |boolean | undefined | null;

address = 'Hyderabad';
address = true;
address = 500038;



// any data type -- represents any data type allowed. Basecally, 
// we are removing the type safety from typescript.

let empNewAddress : any;

empNewAddress = 'Madhapur';
empNewAddress = true;
empNewAddress = 500038;



