const fs = require('node:fs');
const path = require('node:path');
const xlsx = require('xlsx');




class ExcelUtil {

    static readExcel(filePath:string, sheetName:string) {
    // verify if the file exists
    if(!fs.existsSync(filePath)) {
        throw new Error(`file not found in the path ${filePath}`)
    }

        const workbook = xlsx.readFile(filePath);
        const sheet  = workbook.Sheets[sheetName]

        if(!sheet) {
            throw new Error(`the sheet not found in the work book ${sheetName}`)
        }
        return xlsx.utils.sheet_to_json(sheet);

    }
}


const data = ExcelUtil.readExcel(
    path.join(__dirname, '..', 'files', 'TestData.xlsx'),
    'Sheet1'
);
console.log(data);
