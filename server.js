import http from 'http';

const server = http.createServer((req, res) => {
	// res.setHeader('Content-Type', 'text/html');
	// res.statusCode = 200;
	// The previous two lines can be replaced by the following line
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write('<h1>Hello World</h1>');
	res.end();
});

server.listen(3000);
console.log("Hello World");

// alias gadd='function _gcp() { git add . && git commit -m "$1" && git push; }; _gcp'
// gadd "commit msg"