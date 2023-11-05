const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/') {
    res.setHeader('Access-Control-Allow-Origin', '*'); // 允许所有来源跨域访问，根据需要可以指定具体的来源
    res.setHeader('Access-Control-Allow-Methods', 'POST'); // 允许的请求方法
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // 允许的请求头

    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', () => {
      console.log('Received POST data:', data);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Data received successfully');
    });
  } else {
    fs.appendFileSync('./log.log', 'get\n');
    res.statusCode = 200;
    res.end('get');
  }
});

server.listen(8888, () => {
  console.log('Server is listening on port 8888');
});
