const express = require('express');
const app = express();
const proxy = require('express-http-proxy');
const port = 3000;

const options = {
    proxyReqPathResolver: function(req) {
        return require('url').parse(req.url).path;
    }
};

app.use('/', proxy('https://www.google.com/search?q=test?gws_rd=ssl', options));

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}!`));