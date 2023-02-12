//Blocking, Synchronous way;
// const fs = require('fs');
// const data = fs.readFileSync('./data/person.txt','utf-8');
// const age = 23
// const newData = `${data} and my age is ${age}`;
// fs.writeFileSync('./data/newInfo.txt',newData);
// console.log('updated');
// console.log('finished');

//Non blocking, Asynchronous way;
// const fs = require('fs');
// fs.readFile('./data/newInfo.txt','utf-8',(err,data)=>{
//    if(err) console.log(err,' error');
//    else console.log('data = ',data);
// });
// console.log('under working');


const fs = require('fs');
fs.readFile('./data/person.txt','utf-8',(err,text1)=>{
   fs.readFile('./data/newInfo.txt','utf-8',(err,text2)=>{
    fs.appendFile('./data/final.txt',"Finished",(err,data)=>{
        console.log(text1);
        console.log(text2);
        console.log(data);
    })
   })
})

console.log('hai all')