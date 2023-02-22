/* eslint-disable no-console */
import React from 'react';
import express from 'express';
import fs from 'fs';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from '../src/App';

const server = express();

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

server.use('/', express.static(path.join(__dirname, 'static')));

const manifest = fs.readFileSync(
  path.join(__dirname, 'static/manifest.json'),
  'utf-8'
);

const assets = JSON.parse(manifest);

server.get('*', (req, res) => {
  const helmetContext: any = {};
  const helmet = helmetContext;

  const component = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </StaticRouter>
  );
  // console.log(helmet.helmet.title.toString());
  //   const html = `
  //   <html>
  //   <head>
  //     <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  //     ${helmet.helmet.title.toString()}
  //     ${helmet.helmet.meta.toString()}
  //     ${helmet.helmet.link.toString()}
  //   </head>
  //     <div id="root">${component}</div>
  //     <script defer="defer" src="${assets['app.js']}"></script>
  //   <body>
  // `;

  // res.send(html);
  res.render('index', {
    assets,
    component,
    title: helmet.helmet.title.toString(),
    meta: helmet.helmet.meta.toString(),
    link: helmet.helmet.link.toString(),
    script: helmet.helmet.script.toString()
  });
});

console.clear();
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
