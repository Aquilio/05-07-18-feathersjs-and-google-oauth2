const memory = require('feathers-memory');
const hooks = require('./hooks');

const items = app => {
	app.use('items', memory());

	app.service('items').hooks(hooks);
};

module.exports = items;
