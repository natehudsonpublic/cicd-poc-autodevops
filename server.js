'use strict';

const express = require('express');

// Constants
const PORT = 5000;
const HOST = '0.0.0.0';
const GIT_SHA = process.env.GIT_SHA || 'undefined_sha';
const GIT_BRANCH = process.env.GIT_BRANCH || 'undefined_branch';

// App
const app = express();

//console.log(process.env);

app.get('/', (req, res) => {
  var html = '<html><head><title>CICD PoC1 AutoDevops</title></head>\n';
  html += '<style>body { background-color: pink; } </style>\n';
  html += '<body>\n';
  html += '<img src="https://shift.io/images/logo.svg"><h1>CI/CD PoC1 AutoDevops</h1>\n';
  html += '</body></html>\n';
  res.send(html);
  console.log('served /');
});

app.get('/healthCheck', (req, res) => {
  res.send('healthy\n');
  console.log('served /healthCheck');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
