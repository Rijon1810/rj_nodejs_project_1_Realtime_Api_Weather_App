const fs = require('fs');
const http = require('http');//Module

const server = http.createServer();//Create server


server.on('request', (req, res) => {

    /*     fs.readFile('input.txt', (err, data) => {
            if (err) return console.error(err);
            res.end(data.toString());
        }); */
    //2nd way
    //reading from a stream
    //creat readble stream
    //handle stream events -> data ,end ,and error
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   // const rstream = fs.createReadStream('input.txt');//from which fill will stram ////chunk by chunk data reading
/*
    rstream.on('data', (chunkdata) => {     //show chunk of new data
        res.write(chunkdata); // showing chunk data

    })
    rstream.on('end', () => {    //now responding to browser
        res.end(); 
    })
    rstream.on('error', (err) => {

        console.log(err);
        res.end('file not found');
    }) */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //3rd way//Best efficent
    const rstream = fs.createReadStream('input.txt');
    rstream.pipe(res);

})


server.listen('8000', '127.0.0.1')