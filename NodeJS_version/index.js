var request = require("request");
var sleep = require('system-sleep');
var csvToJson = require('convert-csv-to-json');
var csv_json = csvToJson.getJsonFromCsv("out.csv");
for(i=0;i < csv_json.length;i++){
  sleep(500)
  url_num = csv_json[i].url_num
  url_list = 'https://www.zhihu.com/api/v4/topics/' + url_num
  console.log(url_list)
  var options = { method: 'GET',
    url: url_list,
    headers: 
     { 'Content-Type': 'application/json' } };
  
  request(options, function (error, response, body) {
    data = unescape(body.replace(/\\u/g, '%u'))
    data_json_parse =  JSON.parse(data)
    console.log("标签：" + data_json_parse.name)
  });
}