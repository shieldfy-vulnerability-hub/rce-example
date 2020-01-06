
const express = require('express')
const app = express()
const port = 3000

const exec = require('child_process').exec
const { spawn }  = require('child_process');

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



const noVulnerability1 = (req, res) => {
    exec('cat *.js missing_file | wc -l',
    function (err, data) {
        console.log('err: ', err)
        console.log('data: ', data);
    });
    res.send('Hello World!')
}

const noVulnerability2 = (req, res) => {
    spawn('mkdir test',
    function (err, data) {
        console.log('err: ', err)
        console.log('data: ', data);
    });
    res.send('Hello World!')
}

app.get('/vuln1', noVulnerability1);
app.get('/vuln2', noVulnerability2);