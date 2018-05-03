const feathers = require('@feathersjs/feathers');
const expressify = require('@feathersjs/express');
const config = require('@feathersjs/configuration');
const bodyParser = require('body-parser');

const services = require('./services');

const app = expressify(feathers());

app.use(bodyParser.json());

app.configure(config());
app.configure(expressify.rest());

app.configure(services);

app.listen(app.get('port'));
