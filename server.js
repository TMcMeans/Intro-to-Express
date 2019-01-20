const express = require('express');
const app = express();

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url)
  next();
}

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
}

const wrongPathResponse = (request, response, next) => {
  response.status(404).send('Sorry, path not found!');
}

app.use(urlLogger, timeLogger);
app.use(express.static('public'))

app.get('/', (request, response) => {
  // response.send('Hello World');
})

app.get('/json', (request, response) => {
  response.status(200).json({ 'name': 'Tanjie' })
})

app.get('/sunsets', (request, response) => {
  response.sendFile('sunsets.html', { root: 'public' });
})

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
})

app.use(wrongPathResponse);

//Further Challenges

  // #2: Make a new endpoint so that if the client makes a GET request to localhost:3000/sunsets, then the user sees a page with a bunch of pictures of sunsets.

  // #3: Instead of passing the {“name": “Robbie"} JSON object directly into .json() for the localhost:3000/json route. Create some JSON data in a separate file, load that file in the server, and send that file’s JSON data as a response instead of {“name": “Robbie"}.

  // #4: Add a custom 404 page for when the client makes a request to an undefined endpoint. 



