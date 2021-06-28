const http = require("http"); // accessing Node's built-in "http" module
const fs = require("fs"); // accessing built-in File System module
const server = http.createServer(requestHandler); // Request handler function is passed as an argument!;
const PORT = process.env.PORT || 3000;
const host = "0.0.0.0";
const composers = require("./composerData"); // Bringing in database of composers (array of objects)

// STARTING THE SERVER:
server.listen(PORT, host, () =>
  console.log(`Server listening on ${host}:${PORT}`)
);

// INSTRUCTING THE SERVER ON HOW TO LISTEN:
function requestHandler(request, response) {
  console.log(request);
  console.log(response);
  // Allowing code to be requested from any origin to access the resource:
  response.setHeader("Access-Control-Allow-Origin", "*");
  // Telling the colient that its request was accepted:
  response.statusCode = 200;
  let url = request.url;
  let body;
  if (url === "/") {
    fs.createReadStream("./index.html").pipe(response);
  } else {
    // Exctracing input name from url and making it lower-case:
    let extractedName = url.split("=")[1].toLowerCase();
    // Capitalising the name so it matches our database later:
    let nameCapitalised =
      extractedName[0].toUpperCase() + extractedName.slice(1);
    // Matching input name to our composer object:
    body = composers.filter(
      (composer) => composer.name === nameCapitalised
    )[0];
  }
  // Sending composer object back to the client:
  response.end(JSON.stringify(body));
  
}
