const express = require('express');

// descobrindo em qual ambiente a aplicação está rodando
const env = process.env.NODE_ENV;
console.log(env);

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
