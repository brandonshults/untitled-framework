const Koa = require('koa');
const { SERVER_PORT } = require('../config');
const renderReactPageToString = require('./render-react-page-to-string');
const { MAIN } = require('./pages');

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = renderReactPageToString(MAIN, {}, { title: 'Welcome!' });
});

app.listen(SERVER_PORT);
