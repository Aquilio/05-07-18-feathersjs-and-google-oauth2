const { authenticate } = require('@feathersjs/authentication').hooks;

module.exports = {
	before: {
		all: [
			authenticate(['jwt'])
		]
	}
};
