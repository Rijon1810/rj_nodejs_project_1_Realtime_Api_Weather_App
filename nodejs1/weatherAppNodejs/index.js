const http = require('http');
const fs = require('fs');
var requests = require('requests');
const { report } = require('process');

const homeFile = fs.readFileSync('home.html', 'UTF-8');
const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp - 273.15);
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min-273.15);
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max - 273.15);
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);

    return temperature;


}

const server = http.createServer((req, res) => {

    if (req.url == '/') {
        requests('http://api.openweathermap.org/data/2.5/weather?q=Dhaka,BD&appid=0388e34ecccf395e1a50589a877ba607')
            .on('data', (chunk) => {
                const objData = JSON.parse(chunk);

                const arrData = [objData];
                //console.log(arrData[0].main.temp);
                const realTimeData = arrData.map((val) => replaceVal(homeFile, val)).join("");
              
                res.write(realTimeData);
                console.log(realTimeData);

            })
            .on('end', (err) => {
                if (err) return console.log("Connection closed due to erros", err);
                res.end();
            })
        console.log('end');

    }

})


server.listen('8000', "127.0.0.1");