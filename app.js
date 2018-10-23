var http = require('http');

http.createServer(function (req, res) {
    res.end('Node! Get Set Go....');
}).listen(9000);