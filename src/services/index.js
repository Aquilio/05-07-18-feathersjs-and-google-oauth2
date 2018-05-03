const authentication = require('./authentication');
const users = require('./users');
const items = require('./items');

const services = app => {
	[
		authentication,
		users,
		items
	].forEach(service => app.configure(service));
};

module.exports = services;
