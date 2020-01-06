
const express = require('express')
const app = express()
const port = 3000

const exec = require('child_process').exec
const { spawn }  = require('child_process');

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



const Vulnerability1 = (req, res) => {
    exec(
        'gzip ' + req.query.file_path,
        function (err, data) {
            console.log('err: ', err)
            console.log('data: ', data);
        });
        res.send('Hello World!')
}
    
const Vulnerability2 = (req, res) => {
    spawn(`${req.query.input}`,
    function (err, data) {
        console.log('err: ', err)
        console.log('data: ', data);
    });
    res.send('Hello World!')
}

app.get('/vuln1', Vulnerability1);
app.get('/vuln2', Vulnerability2);