const http = require('http');

const server = http.createServer((req, res) => {

    const headers = req.headers;
    const method = req.method;
    const url = req.url;

    console.log("Headers");
    console.log(headers);
    console.log("Method" + method);
    console.log("URL" + url);

    if(req.url == '/teste') {
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Olá Mundo</h1>');
    }

    if(req.url == '/json') {
        res.setHeader('Content-Type', 'application/json');
        const data = {
            id: 1,
            name: "user"
        };
        res.end(JSON.stringify(data))
    }
});


server.listen(3500);