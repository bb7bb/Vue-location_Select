const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");

    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    if(req.url==="/favicon.ico") {
        return;
    }
    if(req.url==="/read"){
        fs.readFile("./site.json",(err,data)=> {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        })
    }
    else if(req.url==="/"){
        res.write("123");
        res.end();
    }


});

server.listen(3001,"127.0.0.1");
