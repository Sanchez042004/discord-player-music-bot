import http from 'http';

const server = http.createServer((req, res) => {
  res.write("I'm alive");
  res.end();
});

export default server;
