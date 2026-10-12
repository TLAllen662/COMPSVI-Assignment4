const http = require("http");

const port = Number(process.env.PORT) || 3000;

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.end(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sorting Performance Optimizer</title>
  </head>
  <body>
    <main>
      <h1>Sorting Performance Optimizer</h1>
      <p>The application container is running.</p>
      <p>Use <code>python data_generator.py</code> to generate datasets, then run
      <code>python starter_code.py</code> to test and benchmark your sorting algorithms.</p>
    </main>
  </body>
</html>`);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Sorting Performance Optimizer listening on port ${port}`);
});
