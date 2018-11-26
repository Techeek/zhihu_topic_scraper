用Nodejs重写爬虫，调用知乎API进行抓取，效率增加，生成文件为`output.csv`。

依赖`request`和`convert-csv-to-json`及`system-sleep`。

- request发起http请求，请求知乎API。
- convert-csv-to-json将`input.csv`数据转换为json数据，`input.csv`文件为第一代爬虫抓取的文件。
- system-sleep，node的延时函数，防止爬虫过快。

第一代需要加拨号VPN，第二代直接抓接口，速度更快，更安全，不会被封IP。



**安装**

```
git clone https://github.com/Techeek/zhihu_topic_scraper.git
cd zhihu_topic_scraper/NodeJS_version
npm install
```

**执行**

```
cd zhihu_topic_scraper/NodeJS_version
node index.js
```

将自动导出名为`output.csv`文件，10W数据，抓完需要14个小时。