const memory = require('feathers-memory');
const hooks = require('./hooks');

const users = app => {
	app.use('users', memory());

	app.service('users').hooks(hooks);
};

module.exports = users;
