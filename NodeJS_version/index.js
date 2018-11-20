var request = require("request");
var fs = require("fs");
var sleep = require('system-sleep');
var csvToJson = require('convert-csv-to-json');
var csv_json = csvToJson.getJsonFromCsv("input.csv");
fs.appendFile('output.csv',"标签" + '\t' + "问题数" + '\t' + "关注数" + '\t' + "精选数" + '\t' + "简介" + '\t' + "url" + '\r\n' , function (err) {
  if (err) throw err;
});
for(i=0;i < csv_json.length;i++){
  sleep(500)
  url_num = csv_json[i].url_num
  url_list = 'https://www.zhihu.com/api/v4/topics/' + url_num
  var options = { method: 'GET',
    url: url_list,
    headers: 
     { 'Content-Type': 'application/json' } };
  
  request(options, function (error, response, body) {
    data = unescape(body.replace(/\\u/g, '%u'))
    data_json_parse =  JSON.parse(data)
    url_original = 'https://www.zhihu.com/topic/' + url_num + '/hot'
    console.log("url：" + url_original)
    console.log("标签：" + data_json_parse.name)
    console.log("问题数：" + data_json_parse.questions_count)
    console.log("关注数：" + data_json_parse.followers_count)
    console.log("简介：" + data_json_parse.introduction)
    console.log("精选数：" + data_json_parse.best_answers_count)
    var data_csv = data_json_parse.name + '\t' + data_json_parse.questions_count + '\t' + data_json_parse.followers_count + '\t' + data_json_parse.best_answers_count + '\t' + data_json_parse.introduction + '\t' + url_original;
    fs.appendFile('output.csv',data_csv + '\r\n', function (err) {
      if (err) throw err;
   });
  });
}