// we should keep import from the module as const as we are not going to change it in future. 
const http = require('http');
const fs = require('fs');

// we are using callback function to accept request and response
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    if (req.url === '/' && req.method === 'GET') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (req.url === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (error) =>{
                return res.end();
            });
        });
        
    }

    res.write(`Mohit`);
    // we cannot write anything after res.end();
    res.end();
    // process.exit();
});

server.listen(3000);
