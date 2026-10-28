
function launchBrowser (browserName:string, url:string) :void {

    console.log(`Launch the ${browserName}`);
    console.log(`open ${url}`);
    console.log(`Enter the username and password`);
    console.log(`click on login button`)
}

launchBrowser('chrome','https://www.facebook.com');


function getAccountBalance() : number {
    console.log(`Navigate to the account balance page`);
    let accountBalance = 1000000;
    return accountBalance;
}


function getAccountStattement (): (string | number )[]  {
    console.log(`Emplyoyee account statement`);
    let accountStatement : (string | number )[] = ["savings", 30000, "current", 12000];

    return accountStatement;
}