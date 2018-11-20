var csvToJson = require('convert-csv-to-json');
var json = csvToJson.getJsonFromCsv("out.csv");
console.log(json[0].url_num)