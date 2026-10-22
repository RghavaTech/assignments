import fs from "node:fs";

let filePath = "files/file1.txt";

if(fs.existsSync(filePath)) {
    console.log(`File ${filePath} exists`);
} else {
    console.log(`file ${filePath} does not exist`);
    
}