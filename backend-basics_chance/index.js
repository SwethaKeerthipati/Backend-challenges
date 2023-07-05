import http from "http";
import { generateRandomPerson } from "./server.js";

const port = 8000;

const server = http.createServer((request, result) => {
  const personInfo = generateRandomPerson();
  result.statusCode = 200;
  result.end(personInfo);
});

server.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
