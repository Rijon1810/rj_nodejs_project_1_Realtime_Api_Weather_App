
const fs  = require('fs');
const bioData = {
    name : 'Rijon',
    age : 26,
    channel : 'rijons',

};

/* 

const jsonData = JSON.stringify(bioData);//Object to json convertion

const objData = JSON.parse(jsonData);//JSON to object

console.log(objData); */

/* 1:convert to JSON
2:Add to another file 
3:readFile
4:again convert to back to js Object
5:show to console */


const jsonData = JSON.stringify(bioData);

/* 
fs.writeFile('json1.json',jsonData,(err)=>{
    console.log(done);

}) */

fs.readFile('json1.json','UTF-8',(err,data)=>{
    const orgData = JSON.parse(data);
    console.log(data);//json file
    console.log(orgData);//object
})






