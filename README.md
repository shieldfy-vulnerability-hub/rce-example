# rce-example

## there is 2 vulnerability

1. rce in `index.vuln.js` line `15`

```js

const Vulnerability1 = (req, res) => {
    exec(
        'gzip ' + req.query.file_path,
        function (err, data) {
            console.log('err: ', err)
            console.log('data: ', data);
        });
        res.send('Hello World!')
}

```
1. rce in `index.vuln.js` line `24`

```js

const Vulnerability2 = (req, res) => {
    spawn(`${req.query.input}`,
    function (err, data) {
        console.log('err: ', err)
        console.log('data: ', data);
    });
    res.send('Hello World!')
}

```