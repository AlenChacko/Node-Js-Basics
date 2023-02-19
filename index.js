const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
//Blocking, Synchronous way;
// const fs = require('fs');
// const data = fs.readFileSync('./data/person.txt','utf-8');
// const age = 23
// const newData = `${data} and my age is ${age}`;
// fs.writeFileSync('./data/newInfo.txt',newData);
// console.log('updated');
// console.log('finished');

//Non blocking, Asynchronous way;

// fs.readFile('./data/newInfo.txt','utf-8',(err,data)=>{
//    if(err) console.log(err,' error');
//    else console.log('data = ',data);
// });
// console.log('under working');


// const fs = require('fs');
// fs.readFile('./data/person.txt','utf-8',(err,text1)=>{
//    fs.readFile('./data/newInfo.txt','utf-8',(err,text2)=>{
//     fs.appendFile('./data/final.txt',"Finished",(err,data)=>{
//         console.log(text1);
//         console.log(text2);
//         console.log(data);
//     })
//    })
// })

// console.log('hai all')





//Server

const server = http.createServer((req,res)=>{
    const pathName = req.url;
    if(pathName === '/'){
        res.end('home');
    }else if( pathName === '/cart'){
        res.end('cart');
    }else if(pathName === '/products'){
       res.end('products');
    }else if(pathName === '/api'){
        // res.end('api');
        fs.readFile(`${__dirname}/data/data.json`,'utf-8',(err,data)=>{
           const file = JSON.parse(data);
           res.end("j")
        })
    }
    else{
        res.writeHead(404);
        res.end('Page not found')
    }
})
server.listen(3000,()=>{
    console.log('server started running at 3000')
})


