const requestHandler = (req, res) =>{
    const url = req.url;
    const method = req.method;

    if(url === '/' && method === 'GET'){
        res.write('<html>');
        res.write('<head><title>Assignment</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome User!</h1>');
        res.write('<form method="POST" action="/create-user">')
        res.write('<input type="text" name="username">');
        res.write('<input type="submit">');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');

        return res.end();
    }

    if(url === '/users' && method === 'GET'){
        res.write('<html>');
        res.write('<head><title>Assignment</title></head>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>user1</li>');
        res.write('<li>user2</li>');
        res.write('<li>user3</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');

        return res.end();
    }

    if(url === '/create-user' && method === 'POST'){
        const body=[];
        req.on('data', chunk =>{
            body.push(chunk);
        })

        return req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
    }
}

exports.handler = requestHandler;